/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @file post_controller
 * @description Controlador de funciones de posts.
 */

const https = require('https');

/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @function obtenerPosts
 * @description Se obtiene todos los posts de la URL dada.
 * @link https://jsonplaceholder.typicode.com/posts
 */
const obtenerPosts = async (req, response) => {
    try {
        var body = "";
        https.get(process.env.URL_POST, (res) => {
            
            res.on('data', (data) => {
                body+=data;
            });

            res.on('error', (e) => {
                response.status(400).json({
                    ok: false,
                    msg: 'Error al obtener posts'
                })
              });
    
              res.on('end', ()=> {
    
                body = JSON.parse(body);
                if (!body){
                    response.status(400).json({
                        ok: false,
                        msg: 'No se encuentran posts.'
                    })
                }
                response.status(200).json({
                    ok: true,
                    body: body
                })
               
            });
          });

    } catch (error) {
        logger.logMessage('error','Respuesta del servidor en posts');
        response.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}


module.exports ={
    obtenerPosts
}