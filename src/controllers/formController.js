require('dotenv').config();
const _ = require('lodash');
const createError = require('http-errors');
const api = require("../helpers/api");
const { comparison, checkTruthy } = require('../utils/comparison');

/**
 * The controller to get the data from Fillout API by query params
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const filterForm = async (req, res, next) => {
  try {
    if (!req.params.formId) {
      next(createError(400, 'formId is required'));
    } else {
      const result = await api.get(`/v1/api/forms/${req.params.formId}/submissions?${req.originalUrl.split('?')[1]}`);
      let filterResult = result.data;

      // If filters is passed, then will filter the response
      if (req.body.filters.length > 0) {
        filterResult = filterResult.responses.filter(i => {
          const getResponse = req.body.filters.map(filter => {
            const getQuestions = i.questions.filter(question => {
              return question.id === filter.id && comparison(question.value, filter.value, filter.condition);
            });
            return getQuestions.length > 0;
          });

          return checkTruthy(getResponse);
        });

        res.send({
          responses: filterResult,
          totalResponses: filterResult.length,
          pageCount: Math.ceil(filterResult.length / (req.query.limit || 150))
        });
      } else {
        res.send(filterResult);
      }
    }
  } catch (error) {
    if (error?.response?.data) {
      const {
        statusCode,
        message
      } = error.response.data;

      next(createError(statusCode, message));
    } else {
      next(createError(500, error.message));
    }
  }
}

module.exports = { filterForm }