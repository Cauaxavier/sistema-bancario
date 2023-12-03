const env = require('./env');

const knex = require('knex')(env.db);

module.exports = knex;