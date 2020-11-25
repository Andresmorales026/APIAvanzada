const yargs = require("yargs");

//paquete express
const express = require('express')
const app = express()

//paquete bodyparser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//paquete mongoose
const mongoose = require('mongoose');

//usar paquete express
app.use(require('./controldeusuarios'));
 

mongoose.connect('mongodb://localhost:27017/bdhotel', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection 
.once('open', () => console.log("conectados a db"))
.on('error', (error) => { console.log("error", error) });


app.listen(3000, () =>{
    console.log("hola");
});