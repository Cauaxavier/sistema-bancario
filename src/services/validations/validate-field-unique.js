const knex = require('../../data/accounts-sql')

module.exports = {
    async validateCpfAndEmail(cpf, email) {
        const cpfRepetido = await knex.get_account_by_cpf(cpf);
        const emailRepetido = await knex.get_account_by_email(email);

        if (cpfRepetido) {
            return 'O cpf não pode ser repetido.';
        } else if (emailRepetido) {
            return 'o email não pode ser repetido';
        } else {
            return false;
        }
    }
}
