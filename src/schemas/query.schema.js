const Joi = require('joi')

/**
 * This is the schema for request query
 */
const queryRequest = Joi.object({
    limit: Joi.number().default(150),
    afterDate: Joi.string(),
    beforeDate: Joi.string(),
    offset: Joi.string().default(0),
    status: Joi.string(),
    includeEditLink: Joi.string(),
    sort: Joi.string().default('asc'),
});

module.exports = queryRequest;