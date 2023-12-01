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

    async list_accounts() {
        return knex("contas")
            .leftJoin("usuarios", "contas.usuario_id", "usuarios.id")
            .select("contas.id as numero", "contas.saldo", "usuarios.* as usuario")    

        //         onst transacoesPorCategoria = await knex('transacoes')
    //   .leftJoin('categorias', 'transacoes.categoria_id', 'categorias.id')
    //   .select('transacoes.*', 'categorias.descricao as categoria_nome');
    }
}
