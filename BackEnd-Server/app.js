const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

mongoose
  .connect(
    "mongodb+srv://admin:admin1234@cluster0.n3bzk.mongodb.net/BlogPostDb?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
