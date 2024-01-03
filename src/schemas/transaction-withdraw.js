const joi = require('joi');

module.exports = joi.object({
    valor: joi.number().positive().required().messages({
        "number.base": "The value must be of numeric type.",
        "any.required": "The value is required.",
        "number.positive": "The value must be a positive number."
    })
});
