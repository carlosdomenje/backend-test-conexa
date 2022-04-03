const jwt = require('jsonwebtoken');


/* 
    Generar un JWT a partir del parametro _id del usuario.
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