const createHttpError = require('http-errors')
const validateSchemas = require('../schemas')

/**
 * The middleware to validate the query params
 * @param {*} validator 
 * @returns validation error or success bypass
 */
const validate = () => {
  return async function (req, res, next) {
    try {
      const validatedBody = await validateSchemas['filterRequest'].validateAsync({ filters: req.body.filters || [] });
      const validatedQuery = await validateSchemas['queryRequest'].validateAsync(req.query);
      req.body = {
        filters: validatedBody.filters,
        query: validatedQuery
      }
      next()
    } catch (err) {
      if (err.isJoi) {
        next(createHttpError(400, { message: err.message }))
      }
      next(createHttpError(500))
    }
  }
}

module.exports = { validate }