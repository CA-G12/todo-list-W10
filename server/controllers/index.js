const { signIn, signUp, signOut } = require('./register');
const { addTask, deleteTask, profile } = require('./user');

module.exports = {
    signIn,
    signUp,
    signOut,
    addTask, 
    deleteTask,
    profile
}