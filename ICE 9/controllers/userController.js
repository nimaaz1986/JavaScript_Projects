// for home get

const homeView = (req, res) => {
    const pageTitle = 'HOME PAGE';
    const homeContact = 'Welcome to my homepage!'
    res.render('home', {
        pageTitle: pageTitle,
        homeContent: homeContact
    })
};

module.exports = {
    homeView,
    
}
