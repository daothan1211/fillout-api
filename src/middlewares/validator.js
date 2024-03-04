const createHttpError = require('http-errors')
const formRequest = require('../schemas')

const validate = (validator) => {
  //! If validator is not exist, throw err
  if (!formRequest.hasOwnProperty(validator))
    throw new Error(`'${validator}' validator is not exist`)

  return async function (req, res, next) {
    try {
      const validated = await formRequest[validator].validateAsync(req.query);
      req.body = validated
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