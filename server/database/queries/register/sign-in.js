const { connection } = require('../../config/connection');

const signInQuery = (email) => connection.query('SELECT id, name, password, FROM users WHERE email = ($1);', [email]);

module.exports = { signInQuery };