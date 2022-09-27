const { connection } = require('../../config/connection');

const profileQuery = () => connection.query('');

module.exports = { profileQuery };