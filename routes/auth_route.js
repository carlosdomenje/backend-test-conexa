/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @file auth_route
 * @description Definición de rutas para autenticación de usuarios.
 */

const {Router} = require('express');
const {login} = require('../controllers/auth_controller');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
var app = Router();


/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @function login
 * @description Login de usuario, validación de campos necesarios para la función.
 */
app.post('/',
    [
        check('email', 'El email es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('email', 'El email tiene un formato inválido').isEmail(),
        validarCampos
    ], login);

module.exports = app;