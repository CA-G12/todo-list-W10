const { connection } = require('../../config/connection');

const profileQuery = (userId) => connection.query('select * from tasks where tasks.user_id = ($1);', [userId]);

module.exports = { profileQuery };