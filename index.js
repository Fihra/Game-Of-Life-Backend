const express = require('express');
const gridRouter = require('./routes/gridRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/GridDB";

mongoose.connect(url, {useNewURLParser: true});

let db = mongoose.connection;

if(!db){
    console.log("Error connecting db");
} else {
    console.log("DB connected successfully");
}



const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))

app.use("/gridsAPI", gridRouter);

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`)
})


