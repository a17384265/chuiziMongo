const mongoose = require("mongoose");

let schema = new mongoose.Schema({

},{collection:"recommends"});
mongoose.model("recommends",schema);