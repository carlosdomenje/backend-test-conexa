const {Router} = require('express');
const {login} = require('../controllers/auth_controller');
var app = Router();


/* Login Route */
app.post('/', login);

module.exports = app;