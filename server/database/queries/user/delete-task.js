const { connection } = require('../../config/connection');

const deleteTaskQuery = () => connection.query('');

module.exports = { deleteTaskQuery };