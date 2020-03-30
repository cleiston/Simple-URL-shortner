const express = require('express');
const routes = express.Router();
const urlController = require('./controllers/urlController');


routes.get('/', urlController.index)

routes.post('/url_short', urlController.create)

routes.get('/:url_short', urlController.redirect)

module.exports = routes;