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
    },

    async validateCpfAndEmailToUpdate(cpf, email, user_id) {
        const user_data = await knex.get_user_by_id(user_id);

        const cpfRepetido = await knex.get_account_by_cpf(cpf);
        const emailRepetido = await knex.get_account_by_email(email);

        if (cpfRepetido && cpfRepetido.cpf !== user_data.cpf) {
            return "O cpf não pode ser repetido.";
        } else if (emailRepetido && emailRepetido.email !== user_data.email) {
            return "O e-mail não pode ser repetido";
        } else {
            return false;
        }

    }
}
