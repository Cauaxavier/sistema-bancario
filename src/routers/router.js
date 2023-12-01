const routers = require('express').Router();

const accountController = require('../controllers/accounts');

const validateBody = require('../middlewares/validation-schema');

const accountsCreateMiddleware = require('../schemas/accounts-create');

routers.post('/accounts', validateBody(accountsCreateMiddleware) ,accountController.registerAccount);
routers.get('/accounts', accountController.listAccounts);

module.exports = routers;