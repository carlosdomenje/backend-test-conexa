
/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @file logger.js
 * @description Función de ayuda para generar logs de importancia para el sistema.
 */
var appRoot = require('app-root-path');
const {transports, createLogger, format} = require('winston');


const logger= createLogger({
    level: 'info',
    timestamp: true,
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.File({
            filename: `${appRoot}/log/app.log`,
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            options: { flags: 'a', mode: 0o666 }
        })
    ] 
  });

/**
 * @author Carlos Domenje
 * @version 1.0.0
 * @function logMessage
 * @param {string} type
 * @param {string} message
 * @description Funcion para generar un log en un archivo dentro de la carpeta del proyecto. 
 */
const logMessage = (type, message) =>{
    switch (type) {
        case 'error':
            logger.error(message);
            break;
        case 'warn':
            logger.warn(message);
            break;
        case 'info':
            logger.info(message);
            break;
        default:
            logger.info(message);
            break;
    }
}
module.exports ={
    logger,
    logMessage

}

