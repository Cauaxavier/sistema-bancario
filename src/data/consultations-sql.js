const knex = require('../config/conexao');

module.exports = {
    async get_deposits(id_account) {
        //return knex('depositos').where({ numero_conta: id_account });

        return knex.select('numero_conta', 'valor', 'data_deposito')
            .from('depositos')
            .where({ numero_conta: id_account });
    },

    async get_withdraws(id_account) {
        //return knex('saques').where({ numero_conta: id_account });
        return knex.select('numero_conta', 'valor', 'data_saque')
            .from('saques')
            .where({ numero_conta: id_account });
    },

    async get_transfers_sent(id_account) {
        return knex.select(
            'numero_conta_origem',
            'numero_conta_destino',
            'valor',
            'data_transferencia'
        ).from('transferencias').where({ numero_conta_origem: id_account });
    },

    async get_transfers_received(id_account) {
        return knex.select(
            'numero_conta_origem',
            'numero_conta_destino',
            'valor',
            'data_transferencia'
        ).from('transferencias').where({ numero_conta_destino: id_account });
    }
}
