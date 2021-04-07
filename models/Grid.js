const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GridSchema = new Schema({
    gridWidth: {
        type: Number,
        required: true
    },
    gridHeight: {
        type: Number,
        required: true
    },
    myGrid: {
        type: String
    }
})

module.exports = mongoose.model("Grid", GridSchema);