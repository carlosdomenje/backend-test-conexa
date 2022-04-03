const https = require('https');

/* 
    Obtener Post desde url.
    @param: none
    @return: response with status
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
        response.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}


module.exports ={
    obtenerPosts
}