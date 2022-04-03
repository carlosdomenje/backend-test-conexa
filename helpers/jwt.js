/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @file jwt.js
 * @description Funciones de ayuda relacionadas con JWT
 */

const jwt = require('jsonwebtoken');



/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @function generarJWT
 * @description Función que genera un JWT a partir de un parametro dado, Tiempo de expiración en 6hs.
 * @param {string} Se necesita un parámetro para generar el JWT
 * @returns {string} token generado.
 */

const generarJWT = ( uid ) => {
    return new Promise ( ( resolve, reject ) => {

        const payload = {
            uid
        };

        jwt.sign(payload, process.env.JWT_SECRET, 
                {expiresIn: '6h'},
                (err, token) => {
                    if(err){
                        reject('No es posible generar el JWT')

                    }else{
                        resolve(token);
                    }
                });
    });


}

module.exports = {
    generarJWT
}