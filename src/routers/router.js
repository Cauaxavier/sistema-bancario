const routers = require('express').Router();

const userLogin = require('../controllers/user-login')
const accountsController = require('../controllers/accounts');
const transactionsController = require('../controllers/transactions');

const validateBody = require('../middlewares/validation-schema');
const authMiddleware = require('../middlewares/auth_middleware');

const accountsCreateMiddleware = require('../schemas/accounts-create');
const userLoginMiddleware = require('../schemas/user-login');
const accountsUpdateMiddleware = require('../schemas/accounts-update');
const transactionDepositMiddleware = require('../schemas/transaction-deposit');

routers.post('/accounts', validateBody(accountsCreateMiddleware) ,accountsController.registerAccount);
routers.post('/login', validateBody(userLoginMiddleware),userLogin);
routers.get('/accounts', accountsController.listAccounts);

routers.use(authMiddleware);

routers.put('/accounts/', validateBody(accountsUpdateMiddleware),accountsController.updateAccount);
routers.delete('/accounts/', accountsController.deleteAccount);

routers.post('/transactions/deposit', validateBody(transactionDepositMiddleware), transactionsController.depositMoney);

module.exports = routers;
