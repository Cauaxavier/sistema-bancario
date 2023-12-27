const { format } = require('date-fns');
const transactionsSql = require('../data/transactions-sql');
const accountsSql = require('../data/accounts-sql');

module.exports = {
    async depositMoney(req, res) {
        const valor = Number(req.body.valor);
        const user_id = req.userID;

        const data_deposito = format(new Date(), "Pp");

        try {
            const account_user = await accountsSql.get_account_by_id(user_id);

            const novo_valor = Number(account_user.saldo) + valor;
        
            await transactionsSql.deposit_money(valor, novo_valor, user_id, data_deposito);

            return res.status(204).json();
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ message:"Error in server." });
        }
    }
}
