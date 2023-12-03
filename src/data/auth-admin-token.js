const jwt = require('jsonwebtoken');
const env = require('../config/env');

module.exports = {
    createToken(user) {
        return jwt.sign(user, env.jwt.secretKey, env.jwt.options);
    },

    getUser(token) {
        try {
            return jwt.verify(token, env.jwt.secretKey);
        } catch (error) {
            return;
        }
    }
}