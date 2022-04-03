
const {Router} = require('express');
const {validarJWT} = require('../middlewares/validar-jwt')
const {
    obtenerPosts
} = require('../controllers/post_controller');

var app = Router();

/* 
    Obtener los posts
*/
app.get('/',validarJWT,obtenerPosts);


module.exports = app;