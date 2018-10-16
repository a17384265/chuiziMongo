var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
let hots = mongoose.model("hots");
/*let recommends =mongoose.model("recommends");*/


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
router.get('/123', function(req, res, next) {
    res.send('respond with a resource');
});
/*router.get('/api/recommends', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    recommends.find({},(err,data)=>{
        if(err){
            throw err;
        }
        res.send(data);
    })
});*/
module.exports = router;
