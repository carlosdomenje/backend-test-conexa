const jwt = require('jsonwebtoken');
const { generarJWT } = require('../helpers/jwt');



/* 
    Verificar Token.
    Verifica que en cada peticion, luego de loguearse, tengamos un token valido.
    El token debe llegar en el header Authorization.
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