const Joi = require('joi')


const FilterClauseType = Joi.object().keys({
    id: Joi.string().required(),
    condition: Joi.string().required(),
    value: Joi.string().allow(null)
})

const filterRequest = Joi.object({
    filters: Joi.array().items(FilterClauseType)
});


module.exports = filterRequest;