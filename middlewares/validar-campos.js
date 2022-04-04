/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @file validar-campos.js
 * @description Funciones middleware para validacion de parametros en las peticiones.
 */

const {validationResult} = require('express-validator');


/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @function validarCampos
 * @description Verificación de posibles errores existentes en funciones de peticion POST. 
 */
const validarCampos = ( req, res, next) =>{

    const errores = validationResult( req );
    if (!errores.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()
        })
    }
    next();

}

module.exports = {
    validarCampos
}