/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @file validar-jwt.js
 * @description Funcion middleware para validacion de JWT.
 */

const jwt = require('jsonwebtoken');
const { generarJWT } = require('../helpers/jwt');



/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @function validarJWT
 * @description Chequeo de token en cada petición que lo requiera. Validación de JWT. 
 *              El token debe llegar en el header Authorization.
 */
const validarJWT = (req, res, next) => {

    const token = req.header('Authorization');

    if (!token){
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;

        next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token inválido'
        })
    }
}


module.exports = {
    validarJWT
}