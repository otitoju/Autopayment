const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:true}));

//PAGE NOT FOUND
app.get('*', (req, res) => {
    console.log(`404 ERROR, PAGE NOT FOUND`)
})

//PORT FOR CONNECTION
const port = 9000;
app.listen(port, (req, res) => {
    console.log(`Satellite is using ${port} port`)
})

//DATABASE CONNECTION
mongoose.connect()