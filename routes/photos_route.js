const {Router} = require('express');
const {validarJWT} = require('../middlewares/validar-jwt')
const {
    obtenerPhotos
} = require('../controllers/photos_controller');

var app = Router();

/* 
    Obtener las fotos
*/
app.get('/',validarJWT,obtenerPhotos);


module.exports = app;