const withAuth = (req, res, next) => {
    //if not logged in on opening, used to redirect user to homepage
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;
