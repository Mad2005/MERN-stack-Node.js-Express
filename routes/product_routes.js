const express = require("express");
const router = express.Router();

router.get("/products",(req,res)=>{
    res.send("Welcome to product route");
});

module.exports = router;