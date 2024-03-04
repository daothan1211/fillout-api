require('dotenv').config();
const _ = require('lodash');
const createError = require('http-errors');
const api = require("../helpers/api");

const filterForm = async (req, res, next) => {
  try {
    if (!req.params.formId) {
      next(createError(400, 'formId is required'));
    } else {
      const result = await api.get(`/v1/api/forms/${req.params.formId}/submissions?${req.originalUrl.split('?')[1]}`);

      res.send(result.data);
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