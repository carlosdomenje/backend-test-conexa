
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

/* 
Middlewares
OWASP rules
https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html
*/
app.use(express.json({limit: '20mb'}));
app.use(express.urlencoded({extended: false, limit: '20mb'}));

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


/* Routes */
app.use(`/${process.env.API_VERSION}/auth`, require('./routes/auth_route'));
app.use(`/${process.env.API_VERSION}/posts`, require('./routes/posts_route'));
app.use(`/${process.env.API_VERSION}/photos`, require('./routes/photos_route'));


/* Server. */
app.listen(PORT, ()=>{
    console.log('server: \x1b[32m%s\x1b[0m', 'running');
});