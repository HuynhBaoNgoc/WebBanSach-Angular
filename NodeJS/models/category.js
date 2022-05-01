const mongoose =require('mongoose');

var Category=mongoose.model('Category',{
    name:{type:String},
    cateID:{type:String},
});

module.exports={Category};