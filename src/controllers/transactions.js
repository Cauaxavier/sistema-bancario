const { format } = require('date-fns');
const transactionsSql = require('../data/transactions-sql');
const accountsSql = require('../data/accounts-sql');

module.exports = {
    async depositMoney(req, res) {
        const valor = Number(req.body.valor);
        const user_id = req.userID;

        const date_of_deposit = format(new Date(), "Pp");

        try {
            const account_user = await accountsSql.get_account_by_id(user_id);

            const new_value = Number(account_user.saldo) + valor;
        
            await transactionsSql.deposit_money(valor, new_value, user_id, date_of_deposit);

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({ message:"Error in server." });
        }
    }, 

    async withdrawMoney(req, res) {
        const valor = Number(req.body.valor);
        const user_id = req.userID;

        const date_of_withdraw = format(new Date(), "Pp");

        try {
            const account_user = await accountsSql.get_account_by_id(user_id);

            if (valor > account_user.saldo) {
                return res.status(403).json({ message: "insufficient founds" });
            }

            const new_value = Number(account_user.saldo) - valor;

            await transactionsSql.withdraw_money(valor, new_value, user_id, date_of_withdraw);

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({ message:"Error in server." });
        }
    },

    async transferMoney(req, res) {
        const { id_conta_destino, valor } = req.body;
        const id_conta_origem = req.userID;

        try {
            const origin_account = await accountsSql.get_account_by_id(id_conta_origem);
            const destination_account = await accountsSql.get_account_by_id(id_conta_destino);

            if (valor > origin_account.saldo) {
                return res.status(403).json({ message: "insufficient founds." });
            }

            if (!destination_account) {
                return res.status(404).json({ message: 'Account destination not found.'});
            }


            const date_of_transfer = format(new Date(), "Pp");

            const new_value_origin_account = Number(origin_account.saldo) - valor;
            const new_value_destination_account = Number(destination_account.saldo) + valor;

            const data_of_transfer = {
                valor,
                id_conta_origem,
                id_conta_destino,
                new_value_origin_account,
                new_value_destination_account,
                date_of_transfer
            };

            await transactionsSql.transfer_money(data_of_transfer);

            return res.status(204).json();

        } catch (error) {
            return res.status(500).json({ message:"Error in server." });
        }
    }
}
