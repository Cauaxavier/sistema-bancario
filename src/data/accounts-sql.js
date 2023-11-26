const knex = require('../config/conexao');

module.exports = {
    async register_account(user_data) { 

        const user = await knex('usuarios').insert({
            cpf: user_data.cpf,
            data_nascimento: user_data.data_nascimento,
            email: user_data.email,
            nome: user_data.nome,
            senha: user_data.senha,
            telefone: user_data.telefone
        }).returning('*');
    
        return knex("contas").insert({ usuario_id: user[0].id });
    }
}