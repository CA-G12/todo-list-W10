const { connection } = require('../../config/connection');

const signInQuery = () => connection.query('');

module.exports = { signInQuery };