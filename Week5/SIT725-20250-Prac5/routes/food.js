const express = require('express');
const projecController = require('../controllers/projectController');
const router = express.Router();

module.exports = router;

const Controllers = require('../controllers');
router.get('/',
Controllers.projectController.getAllFood);