const { connection } = require('../../config/connection');

const deleteTaskQuery = (taskId) => connection.query('DELETE FROM tasks WHERE id = ($1);', [taskId]);

module.exports = { deleteTaskQuery };