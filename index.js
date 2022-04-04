/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @file aindex.js
 * @description Función de entrada.
 */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./helpers/logger');


const PORT = process.env.PORT || 3000;


const app = express();


/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @function Funciones-Middlewares
 * @description Configuracion de CORS, validaciones, headers... segun recomendaciones de OWASP.
 * @link https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html
 */
app.use(express.json({limit: '1kb'}));
app.use(express.urlencoded({extended: false, limit: '1kb'}));
app.use(helmet());


app.use(
    cors(
        {
            origin: "*",
            optionsSuccessStatus: 200,
            credentials: true
        }
    )
);

app.options("*", cors());



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With, Accept");
    next();
  });

 // Directorio Público
 app.use( express.static('public') );

/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @description Definicion de rutas utilizadas.
 */
app.use(`/${process.env.API_VERSION}/auth`, require('./routes/auth_route'));
app.use(`/${process.env.API_VERSION}/posts`, require('./routes/posts_route'));
app.use(`/${process.env.API_VERSION}/photos`, require('./routes/photos_route'));


/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @description Creación de un Listener en el puerto especificado.
 */
app.listen(PORT, ()=>{
  logger.logMessage('info','server running');
});