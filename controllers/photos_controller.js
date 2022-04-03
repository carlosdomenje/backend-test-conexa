const https = require('https');

/* 
    Obtener Photos desde url
    @param: none
    @return: response with status
*/

const obtenerPhotos = async (req, response) => {
    try {
        var body = "";
        var limit = req.query._limit;
        var start = req.query._start * 10;

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
            response.status(404).json({
                ok: false,
                msg: 'No se encuentra el destino'
            })
        });
        
    } catch (error) {
        response.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}


module.exports ={
    obtenerPhotos
}