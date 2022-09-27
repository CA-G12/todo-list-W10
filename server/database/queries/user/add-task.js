const { connection } = require('../../config/connection');

const addTaskQuery = () => connection.query('');

module.exports = { addTaskQuery };