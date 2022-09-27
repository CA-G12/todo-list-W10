const { connection } = require('../../config/connection');

const signInQuery = (email) => connection.query('SELECT id, name, password AS hashedpassword, img FROM users WHERE email = ($1);', [email]);

module.exports = { signInQuery };