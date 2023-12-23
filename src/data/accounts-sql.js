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
    },

    async get_account_by_cpf(cpf) {
        return knex("usuarios").where({ cpf }).first();
    },

    async get_account_by_email(email) {
        return knex("usuarios").where({ email }).first();
    },

    async get_user_by_id(id) {
        return knex("usuarios").where({ id }).first();
    },

    async get_account_by_id(id) {
        return knex("contas").where({ usuario_id: id }).first();
    },

    async list_accounts() {
        return knex("contas")
            .leftJoin("usuarios", "contas.usuario_id", "usuarios.id")
            .select("contas.id as numero", "contas.saldo", "usuarios.* as usuario");    
    },

    async update_account(user_data, id) {
        return knex("usuarios").update({
            cpf: user_data.cpf,
            data_nascimento: user_data.data_nascimento,
            email: user_data.email,
            nome: user_data.nome,
            senha: user_data.senha,
            telefone: user_data.telefone
        }).where({ id });
    },

    async delete_account(id) {
        await knex("contas").del().where({ usuario_id: id });
        return knex("usuarios").del().where({ id });
    }
}
