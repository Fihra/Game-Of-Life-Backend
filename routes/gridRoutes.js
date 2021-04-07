const express = require('express');
const router = express.Router();

const Grid = require("../models/Grid");

router.get("/", async (req, res, next) => {
    // res.json({"hello": "API is working properly"});
    console.log(Grid)
    try {
        const grids = await Grid.find();
        console.log(grids);
        res.json(grids);
    } catch(err){
        res.json({message: err});
    }
})

module.exports = router;
