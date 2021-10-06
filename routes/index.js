var express = require('express');
var router = express.Router();

// Require controller modules.
var home_controller = require('../controllers/homeController');

/// Home ROUTES ///

// GET home page.
router.get('/', home_controller.index);

module.exports = router;