const express = require('express');

const feedRoutes = require('./routes/feed');

const app = express();

app.use('/feed' , feedRoutes)  // Can write as app.use(feedRoutes)

app.listen(8080);