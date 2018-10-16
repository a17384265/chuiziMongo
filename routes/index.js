var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
let hots = mongoose.model("hots");
let recommends =mongoose.model("recommends");
let products =mongoose.model("products");



/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/api/hots',function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    hots.find({},(err,data)=>{
        if(err){
            throw err;
        }
        res.send(data);
    })
});

router.get('/api/recommends', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        recommends.find({},(err,data)=>{
        if(err){
            throw err;
        }
         res.send(data);
        })
    });
router.get('/api/products',function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    products.find({},(err,data)=>{
        if(err){
            throw err;
        }
        res.send(data);
    })
});
module.exports = router;
