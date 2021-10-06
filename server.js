'use strict';

const express = require('express');
const router = require('./routes');
const app = express();
const port = 8042;
const indexRouter = require('./routes/index');
const carsRouter = require('./routes/cars');
const carssite = require('/public/data/cars.html')


app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/cars', carssite);

// app.get('/', (req, res) => {

//     res.sendFile('public/index.html');

// });

app.listen(port);

console.log('Server up and running, listning on port: ' + port);