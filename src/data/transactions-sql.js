const knex = require('../config/conexao');

module.exports = {
    async deposit_money(valor, novo_valor, id, data_deposito) {
        await knex('contas').update({ saldo: novo_valor }).where({ usuario_id: id });
        
        return knex('depositos').insert({ 
            numero_conta: id,
            valor,
            data_deposito 
        });
    }
}
