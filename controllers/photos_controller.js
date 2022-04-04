/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @file photos_controller
 * @description Controlador de funciones fotos.
 */

const https = require('https');


/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @function obtenerPhotos
 * @description Se obtiene las fotos con un determinado offset y limite.
 * @link https://github.com/typicode/jsonplaceholder/issues/65
 */
const obtenerPhotos = async (req, response) => {
    try {
        var body = "";
        var limit = req.query._limit || 10;
        var start = req.query._start * 10 || 0;

        var options = {
            hostname: process.env.URL_PHOTOS,
            port:443,
            path:`/photos?_start=${start}&_limit=${limit}`,
            method: 'GET',
        };

        const request = https.get(options, (res) => {
            
            res.on('data', (data) => {
                body+=data;
            });

            res.on('error', (e) => {
                response.status(400).json({
                    ok: false,
                    msg: 'Error al obtener photos'
                })
              });
    
              res.on('end', ()=> {
    
                body = JSON.parse(body);
                if (!body){
                    response.status(400).json({
                        ok: false,
                        msg: 'No se encuentran photos.'
                    })
                }
                response.status(200).json({
                    ok: true,
                    photos: body,
                    from: start,
                    count: limit
                })
               
            });
        
        });
        request.on('error', (error)=>{
            logger.logMessage('error','No se encuentra el destino de fotos');
            response.status(404).json({
                ok: false,
                msg: 'No se encuentra el destino'
            })
        });
        
    } catch (error) {
        logger.logMessage('error','Respuesta del servidor en fotos');
        response.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}


module.exports ={
    obtenerPhotos
}