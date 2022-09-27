const { connection } = require('../../config/connection');

const signUpQuery = () => connection.query('');

module.exports = { signUpQuery };