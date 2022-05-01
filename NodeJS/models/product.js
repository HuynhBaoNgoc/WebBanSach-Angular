const mongoose =require('mongoose');

var Product=mongoose.model('Product',{
    name:{type:String},
    productID:{type:String},
    price:{type:Number},
    description:{type:String},
    imgPath:{type:String},
    cateID:{type:String},
});

module.exports={Product};