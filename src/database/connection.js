const configuration = require('../../knexfile.js');
const knex = require('knex')
const connection = knex(configuration.development);

module.exports = connection;
