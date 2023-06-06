var mongoose = require('mongoose');
var MobileSchema = mongoose.Schema(
    {
        name : String,
        brand : String,
        color : String,
        quantity : Number,
        image : String, 
        video : String
    }
)
var MobileModels = mongoose.model("Dien Thoai", MobileSchema, "mobile");
module.exports = MobileModels;