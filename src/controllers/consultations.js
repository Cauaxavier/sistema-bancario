const { get_account_by_id } = require("../data/accounts-sql");
const consultationsSql = require("../data/consultations-sql");


module.exports = {
    async getBalance(req, res) {
        try {
            const account = await get_account_by_id(req.userID);

            return res.status(200).json({ balance: account.saldo });
  
        } catch (error) {
            return res.status(500).json({ message: "Error in server." })
        }
    },

    async extract(req, res) {
        try {
            const deposits = await consultationsSql.get_deposits(req.userID);
            const withdraws = await consultationsSql.get_withdraws(req.userID);
            const transfersSent = await consultationsSql.get_transfers_sent(req.userID);
            const transfersReceived = await consultationsSql.get_transfers_received(req.userID);
            
            const extract = {
                deposits,
                withdraws,
                transfersSent,
                transfersReceived
            }

            return res.status(200).json(extract);

        } catch (error) {
            return res.status(500).json({ message: "Error in server." })
        }
    }
}