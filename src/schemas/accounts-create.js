const joi = require('joi');

module.exports = joi.object({
    nome: joi.string().min(3).required().messages({
        'string.min': 'Nome deve ter no mínimo 3 caracteres',
        'string.base': 'o nome precisa ser do tipo texto',
        'string.empty': 'Nome não pode ser vazio',
        'any.required': 'Nome é obrigatório'
    }),

    cpf: joi.string().length(11).required().messages({
        'string.base': 'o cpf precisa ser do tipo texto',
        'string.length': 'O cpf precisa conter 11 caracteres',
        'string.empty': 'Cpf não pode ser vazio',
        'any.required': 'Cpf é obrigatório'
    }),

    email: joi.string().email().required().messages({
        'string.email': 'Email inválido',
        'string.empty': 'Email não pode ser vazio',
        'string.base': 'o email precisa ser do tipo texto',
        'any.required': 'Email é obrigatório'
    }),

    senha: joi.string().min(6).required().messages({
        'string.empty': 'Senha não pode ser vazia',
        'string.base': 'o senha precisa ser do tipo texto',
        'any.required': 'Senha é obrigatória',
        'string.min': 'A senha deve ter pelo menos 5 caracteres'
    }),

    data_nascimento: joi.string().min(8).required().messages({
        'string.empty': 'Data de nascimento não pode ser vazia',
        'string.base': 'A data de nascimento precisa ser do tipo texto',
        'any.required': 'Data de nascimento é obrigatória',
        'string.min': 'A data de nascimento deve ter pelo menos 5 caracteres'
    }),

    telefone: joi.string().length(11).required().messages({
        'string.empty': 'Senha não pode ser vazia',
        'string.base': 'o cpf precisa ser do tipo texto',
        'any.required': 'Senha é obrigatória',
        'string.length': 'A senha deve ter pelo menos 11 caracteres'
    })
});
