const express = require('express');
const gridRouter = require('./routes/gridRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

app.use("/gridsAPI", gridRouter);

const url = "mongodb://localhost:27017/GridsDB";

mongoose.connect(url, {useNewURLParser: true});

let db = mongoose.connection;

if(!db){
    console.log("Error connecting db");
} else {
    console.log("DB connected successfully");
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`)
})


