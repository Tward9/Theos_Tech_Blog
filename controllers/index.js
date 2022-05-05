const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const postDashboard = require('./postDashboard-routes.js')

router.use('/', homeRoutes);
router.use('/dashboard', postDashboard);
router.use('/api', apiRoutes);

module.exports = router;
