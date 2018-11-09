const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    productImage: String,
    productId: String,
    salePrice: Number,
    productName: String,
    sub_title: String,
    num: Number
}, {collection: "order"});
mongoose.model("order", schema);