var express = require('express');
const IndexController = require('../controllers/indexController')
var router = express.Router();

// router.get('/', IndexController.showSeguidores);
router.get('/:login?', IndexController.showSeguidores);

module.exports = router;