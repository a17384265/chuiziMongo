const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mymall");
//导入所有的模型(目的是为了运行代码)

require("./hots");
require("./recommends");
require("./products");
require("./order")