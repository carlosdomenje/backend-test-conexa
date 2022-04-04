/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @file posts_route
 * @description Definición de rutas para posts.
 */
const {Router} = require('express');
const {validarJWT} = require('../middlewares/validar-jwt')
const {obtenerPosts} = require('../controllers/post_controller');

var app = Router();

/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @function obtenerPosts
 * @description Obtener todos los posts desde una URL dada.
 */
app.get('/',validarJWT,obtenerPosts);


module.exports = app;