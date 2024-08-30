const express = require('express');

const feedRoutes = require('./routes/feed');
const bodyParser = require('body-parser');

const app = express();

//app.use(bodyParser.urlencoded());  //x-www-form-urlencoded <form>
app.use(bodyParser.json());  // application/json

app.use('/feed' , feedRoutes)  // Can write as app.use(feedRoutes)

app.listen(8080);