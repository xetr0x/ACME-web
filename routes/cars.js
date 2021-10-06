var express = require('express');
var router = express.Router();

// Require controller modules.
var cars_controller = require('../controllers/carscontroller');

/// Cars ROUTES ///

// GET cars page.
router.get('/', cars_controller.show);
router.get('/12', cars_controller.pelikan);

module.exports = router;