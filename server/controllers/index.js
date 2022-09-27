const { signIn, signUp } = require('./register');
const { addTask, deleteTask, profile } = require('./user');

module.exports = {
    signIn,
    signUp,
    addTask, 
    deleteTask,
    profile
}