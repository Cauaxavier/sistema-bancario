const { format } = require('date-fns');
const transactionsSql = require('../data/transactions-sql');
const accountsSql = require('../data/accounts-sql');

module.exports = {
    async depositMoney(req, res) {
        const valor = Number(req.body.valor);
        const user_id = req.userID;

        const data_deposit = format(new Date(), "Pp");

        try {
            const account_user = await accountsSql.get_account_by_id(user_id);

            const novo_value = Number(account_user.saldo) + valor;
        
            await transactionsSql.deposit_money(valor, novo_value, user_id, data_deposit);

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({ message:"Error in server." });
        }
    }, 

    async withdrawMoney(req, res) {
        const valor = Number(req.body.valor);
        const user_id = req.userID;

        const data_withdraw = format(new Date(), "Pp");

        try {
            const account_user = await accountsSql.get_account_by_id(user_id);

            if (valor > account_user.saldo) {
                return res.status(403).json({ message: "insufficient founds" });
            }

            const novo_valor = Number(account_user.saldo) - valor;

            await transactionsSql.withdraw_money(valor, novo_valor, user_id, data_withdraw);

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({ message:"Error in server." });
        }
    }
}
