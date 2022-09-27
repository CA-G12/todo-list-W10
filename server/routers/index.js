const { Router } = require('express');
const userRouter = require('./user');
const registerRouter = require('./register');

const router = Router();

router.use(userRouter);
router.use(registerRouter);

module.exports = router;