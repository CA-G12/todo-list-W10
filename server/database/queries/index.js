const { signInQuery, signUpQuery } = require('./register');
const { addTaskQuery, deleteTaskQuery, profileQuery } = require('./user');

module.exports = {
    signInQuery,
    signUpQuery,
    addTaskQuery,
    deleteTaskQuery,
    profileQuery,  
}