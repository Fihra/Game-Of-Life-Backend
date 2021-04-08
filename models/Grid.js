const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GridSchema = new Schema({
    gridWidth: {
        type: Number,
    },
    gridHeight: {
        type: Number,
    },
    myGrid: {
        type: String
    }
})

module.exports = mongoose.model("Grid", GridSchema);