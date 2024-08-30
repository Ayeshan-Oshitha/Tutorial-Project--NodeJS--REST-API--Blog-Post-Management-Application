const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');


const app = express();

//app.use(bodyParser.urlencoded());  //x-www-form-urlencoded <form>
app.use(bodyParser.json());  // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');  // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');  // Allow these HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');  // Allow these headers
    next();
})

app.use('/feed' , feedRoutes)  // Can write as app.use(feedRoutes)

app.listen(8080);