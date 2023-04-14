const router = require('express').Router();
const passport = require('passport');
const isAuth = require('./authMiddleware').isAuth;

const {
	loginFailure,
	loginSuccess,
	getRegister,
	getIndex,
	getLogin,
	getLogout,
	postRegister
} = require('../controllers/userController');

router.get('/', getIndex);

router.get('/login', getLogin);

router.get('/register', getRegister);
router.post('/register', postRegister);


// POST LOGIN
// add passport.authenticate() middleware passing 'local'
// allows route if isValid
router.post('/login',
    passport.authenticate('local', {
	failureRedirect: '/login-failure',
	successRedirect: '/login-success'
	})
);

router.get('/login-success', loginSuccess);

router.get('/login-failure', loginFailure);

router.get('/logout', getLogout);


// CHECKS FOR AUTHORIZED ACCCESS BEFORE ALLOWING SEEING PROTECTED MATERIAL
router.get('/protected-route', isAuth)

module.exports = router;
