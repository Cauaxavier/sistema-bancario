const accountsSql = require("../data/accounts-sql");

module.exports = {
    
    async registerAccount(req, res) {

        const user_data = req.body;
        
        try {
            await accountsSql.register_account(user_data);
    
            res.status(201).json({ message: 'Account successfully registered.' });
            
        } catch (error) {
            return res.status(500).json({ mensagem: "Erro interno." });
        }
    }
};