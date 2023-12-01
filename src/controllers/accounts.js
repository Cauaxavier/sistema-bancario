const bcrypt = require('bcrypt');

const accountsSql = require("../data/accounts-sql");
const { validateCpfAndEmail } = require("../services/validations/validate-field-unique");

module.exports = {
    
    async registerAccount(req, res) {

        const user_data = req.body;
        
        try {

            const thereIsAFieldRepeat = await validateCpfAndEmail(user_data.cpf, user_data.email)

            if (thereIsAFieldRepeat) {
                return res.status(409).json({ message: thereIsAFieldRepeat });
            }

            const encryptPassword = await bcrypt.hash(user_data.senha, 10);

            user_data.senha = encryptPassword;

            await accountsSql.register_account(user_data);
    
            res.status(201).json({ message: 'Account successfully registered.' });
            
        } catch (error) {
            return res.status(500).json({ message: "Error in server." });
        }
    },

    async listAccounts(req, res) {
        try {

            const accounts = await accountsSql.list_accounts();

            const formatAccounts = accounts.map(account => {

                const usuario = {
                    nome: account.nome,
                    cpf: account.cpf,
                    email: account.email,
                    telefone: account.telefone,
                    data_nascimento: account.data_ascimento,
                };

                account = {
                    numero: account.id,
                    saldo: account.saldo,
                    usuario
                };

                return account;
            })

            return res.status(200).json(formatAccounts);
        } catch (error) {
            return res.status(500).json({ message: "Error in server." });
        }
    }
};
