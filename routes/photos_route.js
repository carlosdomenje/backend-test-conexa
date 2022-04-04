/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @file photos_route
 * @description Definición de rutas para fotos.
 */

const {Router} = require('express');
const {validarJWT} = require('../middlewares/validar-jwt');
const {obtenerPhotos} = require('../controllers/photos_controller');

var app = Router();

/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @function obtenerPhotos
 * @description Obtener las fotos segun offset y limit.
 */
app.get('/',validarJWT,obtenerPhotos);


module.exports = app;