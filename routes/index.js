var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
let hots = mongoose.model("hots");
let recommends = mongoose.model("recommends");
let products = mongoose.model("products");
let order = mongoose.model("order")
const SMSClient = require('@alicloud/sms-sdk')
// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'LTAIVziEvdv0u6X1';
const secretAccessKey = 'yG0UmOnCq92IZRVFGZkPg2gG8Lf0t0'
require("util");


router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/api/hots', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    hots.find({}, (err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    })
});

router.get('/api/recommends', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    recommends.find({}, (err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    })
});
router.get('/api/products', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    products.find({}, (err, data) => {
        if (err) {
            throw err;
        }
        res.send(data);
    })
});
router.post('/login', function (req, res, next) {
    var username = req.body.name
    var password = req.body.pass
    console.log(req.body)

})
router.post('/payment', function (req, res, next) {
    let data = req.body.product
    var charu = []
    for (let i of data) {
        console.log(i)
        charu.push(i)
        order.create(data, function (err) {
            if (!err) {
                console.log("success")
            }
        })
    }
});

router.post('/register', function (req, res) {
    let smsClient = new SMSClient({accessKeyId, secretAccessKey});
    smsClient.sendSMS({
        PhoneNumbers: '19919803041',
        SignName: '持明法洲',
        TemplateCode: 'SMS_143867493',
        TemplateParam: '{"code":"sb250"}'
    }).then(function (res) {
        let {Code} = res;
        if (Code === 'OK') {
            //处理返回参数
            console.log(res)
        }
    }, function (err) {
        console.log(err)
    });
    res.redirect("/login.html")

});

module.exports = router;
