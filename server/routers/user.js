const { Router } = require('express');
const { profile, addTask, deleteTask } = require('../controllers');
const { authentication } = require('../middlewares/authentication')

const router = Router();

router.post('/user/profile', profile);
router.post('/user/add-task', authentication, addTask);
router.get('/user/delete-task:id' ,authentication , deleteTask);

module.exports = router;