const joi = require('joi');

module.exports = joi.object({
    valor: joi.number().positive().required().messages({
        "number.base": "The value must be of numeric type.",
        "any.required": "The value is required.",
        "number.positive": "The value must be a positive number."
    }),

    id_conta_destino: joi.number().positive().required().messages({
        "number.base": "The 'id_conta_destino' must be of numeric type.",
        "any.required": "The 'id_conta_destino' is required.",
        "number.positive": "The 'id_conta_destino' must be a positive number."
    })
});