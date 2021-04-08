const express = require('express');
const router = express.Router();

const Grid = require("../models/Grid");

router.get("/", async (req, res, next) => {
    console.log(Grid)
    try {
        const grids = await Grid.find();
        console.log(grids);
        res.json(grids);
    } catch(err){
        res.json({message: err});
    }
})

router.post('/new', async (req, res, next) => {
    console.log(req.body);
    const grid = new Grid({
        gridWidth: req.body.gridWidth,
        gridHeight: req.body.gridHeight,
        myGrid: req.body.myGrid
    })

    try{
        console.log(grid);
        const newGrid = await grid.save();
        res.json(newGrid);
    } catch(error){
        res.json({message: error})
    }
 
})

module.exports = router;
