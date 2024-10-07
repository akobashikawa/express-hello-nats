const express = require('express');
const router = express.Router();

const nats = require('./nats-client');

const Service = require('./service');
const service = new Service({ nats });

const Controller = require('./controller');
const controller = new Controller({ service });

router.get('/hello', async (req, res) => controller.hello(req, res) );

module.exports = router;