const { Router } = require('express');
const { signIn, signUp, signOut } = require('../controllers');

const router = Router();

router.post('/user/sign-up', signUp);
router.post('/user/sign-in', signIn);
router.get('/user/sign-out', signOut);

module.exports = router;