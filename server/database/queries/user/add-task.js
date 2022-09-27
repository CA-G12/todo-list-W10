const { connection } = require('../../config/connection');

const addTaskQuery = (values) => connection.query('INSERT INTO tasks(title, content, user_id) VALUES($1,$2,$3);', values);

module.exports = { addTaskQuery };