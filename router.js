const express = require('express');
const router = express.Router();

const Service = require('./service');
const service = new Service();
const Controller = require('./controller');
const controller = new Controller({ service });

router.get('/hello', async (req, res) => controller.hello(req, res) );

module.exports = router;