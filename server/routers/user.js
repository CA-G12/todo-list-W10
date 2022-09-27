const { Router } = require('express');
const { profile, addTask, deleteTask } = require('../controllers');

const router = Router();

router.post('/user/profile', profile);
router.post('/user/add-task', addTask);
router.get('/user/delete-task', deleteTask);

module.exports = router;