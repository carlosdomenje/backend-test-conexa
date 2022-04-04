/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @file auth_controller
 * @description Controlador de funciones para autenticación de usuarios.
 */
const { generarJWT } = require('../helpers/jwt');
const  logger  = require('../helpers/logger');

/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @function login
 * @description Se obtiene del body el usuario y pass, 
 *              se genera un token con el password 
 *              para validar peticiones posteriores.
 */
const login = async (req, res ) =>{
    const {email, password} = req.body;
    
    try {
        const token = await generarJWT( password );

        res.status(200).json({
            ok:true,
            token,
            msg: 'Login Correcto',

        })
        
    } catch (error) {
        logger.logMessage('error','Error de funcion login');
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
        
    }
}

module.exports = {
    login
}