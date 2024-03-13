const knex = require('../config/conexao');

module.exports = {
    async deposit_money(valor, novo_valor, id, data_deposito) {
        await knex('contas').update({ saldo: novo_valor }).where({ usuario_id: id });
        
        return knex('depositos').insert({ 
            numero_conta: id,
            valor,
            data_deposito 
        });
    },

    async withdraw_money(valor, novo_valor, id, data_saque) {
        await knex('contas').update({ saldo: novo_valor }).where({ usuario_id: id });

        return knex('saques').insert({ 
            numero_conta: id,
            valor,
            data_saque
        });
    },

    async transfer_money(data_of_transfer) {
        await knex('contas').update({
            saldo: data_of_transfer.new_value_origin_account
        }).where({ usuario_id: data_of_transfer.id_conta_origem });

        await knex('contas').update({
            saldo: data_of_transfer.new_value_destination_account
        }).where({ usuario_id: data_of_transfer.id_conta_destino });

        return knex('transferencias').insert({
            numero_conta_origem: data_of_transfer.id_conta_origem,
            numero_conta_destino: data_of_transfer.id_conta_destino,
            valor: data_of_transfer.valor,
            data_transferencia: data_of_transfer.date_of_transfer
        });

    }
}
