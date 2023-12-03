const joi = require('joi');

module.exports = joi.object({
    cpf: joi.string().required().messages({
        'string.base': 'Cpf must be text type.',
        'string.empty': 'Cpf cannot be empty.',
        'any.required': 'Cpf is required.',
    }),

    senha: joi.string().required().messages({
        'string.empty': 'Password cannot be empty.',
        'string.base': 'Password must be text type.',
        'any.required': 'Password is required.',
    }),
});
