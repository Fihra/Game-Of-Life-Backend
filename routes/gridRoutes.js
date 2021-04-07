const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.json({"hello": "API is working properly"});
})

module.exports = router;
