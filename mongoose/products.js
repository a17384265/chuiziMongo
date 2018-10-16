const mongoose = require("mongoose");

let schema = new mongoose.Schema({

},{collection:"products"});
mongoose.model("products",schema);