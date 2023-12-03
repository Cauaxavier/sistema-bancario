const bcrypt = require('bcrypt');
const jwt = require('../data/auth-admin-token');
const accountsSql = require('../data/accounts-sql');

const login = async(req, res ) => {
    const { cpf, senha } = req.body;

    try {
        
        const user = await accountsSql.get_account_by_cpf(cpf);
    
        if (!user) {
            return res.status(403).json({ message: 'cpf or password invalid.' });
        }
    
        const isEqual = await bcrypt.compare(senha, user.senha);
    
        if (!isEqual) {
            return res.status(403).json({ message: 'cpf or password invalid.' });
        }
    
        const token = jwt.createToken({ id: user.id });
    
        const { senha:_, ...userLogin } = user;
    
        return res.status(201).json({ user: userLogin, token });

    } catch (error) {
        return res.status(500).json({ message: "Error in server." });
    }
};

module.exports = login;