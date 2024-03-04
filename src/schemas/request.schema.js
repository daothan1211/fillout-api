const Joi = require('joi')


// const FilterClauseType = Joi.object().keys({
//     id: Joi.string().required(),
//     condition: Joi.string().required(),
//     value: Joi.string().required()
// })

const formRequest = Joi.object({
    limit: Joi.number().default(150),
    afterDate: Joi.string(),
    beforeDate: Joi.string(),
    offset: Joi.string().default(0),
    status: Joi.string(),
    includeEditLink: Joi.string(),
    sort: Joi.string().default('asc'),
    // filters: Joi.array().items(FilterClauseType)
});


module.exports = formRequest;