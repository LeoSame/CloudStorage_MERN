const Router = require('express');
const { check } = require('express-validator');
const router = new Router();
const authMiddleware = require('../middleware/auth.middleware');
const userController = require('../controllers/userController');

router.post(
  '/registration',
  [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Password must be longer than 3 and shorter than 12').isLength({ min: 3, max: 12 }),
  ],
  userController.registration
);

router.post('/login', userController.login);

router.get('/auth', authMiddleware, userController.auth);

module.exports = router;
