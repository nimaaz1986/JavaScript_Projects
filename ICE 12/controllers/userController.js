const connection = require('../config/database');
const { generatePassword } = require('../lib/passwordUtils');
const User = connection.models.User;

// INDEX
const getIndex = (req, res, next) => {
	res.render('index', {
		loggedin: req.isAuthenticated()
	});
};

// REGISTER GET
const getRegister = (req, res, next) => {
	res.render('register', {
		loggedin: req.isAuthenticated()
	});
};
// REGISTER POST - LEVERAGES GENERATE PASSWORD TO STORE A HASHED EMAIL
const postRegister = (req, res) =>{
	const saltHash = generatePassword(req.body.password)

	const salt = saltHash.salt
	const hash = saltHash.hash

	const newUser = new User({
		username: req.body.username,
		hash: hash,
		salt: salt,
		isAdmin: true
	});

	newUser.save().then((user) => {
		console.log(`new user: ${user}`);
	});

	res.redirect('/login');
};
// LOGIN GET
const getLogin = (req, res, next) => {
	res.render('login',{
		loggedin: req.isAuthenticated()
	});
};
// LOGIN POST SUCCESS
const loginSuccess= (req, res) =>{
	const id = req.session.passport.user
	User.findById({_id: id}).lean().then((user) =>{
		if(user){
			console.log(`user logged in!`)
			res.render('login-success',{
				loggedin: req.isAuthenticated(),
				user: user
			})
		}else {
			res.render('login-success',{
				loggedin: req.isAuthenticated()

			})
		}
	}).catch((err) => console.log(`error getting user: ${err}`));
};
// LOGIN POST FAILURE
const loginFailure = (req, res) => {
	res.render('login-failure', {
		loggedin: req.isAuthenticated()
	});
};
// LOGOUT GET
const getLogout = (req, res) => {
	req.logout((err) => {
		if(err){
			return err;
		}
		res.redirect('/protected-route');
	});
};
module.exports = {
	loginFailure,
	loginSuccess,
	getRegister,
	getIndex,
	getLogin,
	getLogout,
	postRegister
};
