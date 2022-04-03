const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');


/* 
    Login
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

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
        
    }
}

module.exports = {
    login
}