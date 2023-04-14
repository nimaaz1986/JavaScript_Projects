// CALLED IN ROUTER.JS TO AUTHENTICATE BEFORE ALLOWING PROCTED MATERIAL BEING VISIBLE
const isAuth = (req, res) => {
	if (req.isAuthenticated()) {
		res.render('authenticated', { loggedin:  req.isAuthenticated() });
	} else {
		res.render('unauthenticated', { loggedin: req.isAuthenticated()  });
	}
};

module.exports = { isAuth };
