const express = require('express');
const app = express();

const router = require('./router');
app.use('/api/', router);

module.exports = app;