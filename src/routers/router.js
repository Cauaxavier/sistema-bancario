const routers = require('express').Router();

const userLogin = require('../controllers/user-login')
const accountsController = require('../controllers/accounts');

const validateBody = require('../middlewares/validation-schema');
const authMiddleware = require('../middlewares/auth_middleware');

const accountsCreateMiddleware = require('../schemas/accounts-create');
const userLoginMiddleware = require('../schemas/user-login');

routers.post('/accounts', validateBody(accountsCreateMiddleware) ,accountsController.registerAccount);
routers.post('/login', validateBody(userLoginMiddleware),userLogin);
routers.get('/accounts', accountsController.listAccounts);

// routers.use(authMiddleware);

module.exports = routers;
