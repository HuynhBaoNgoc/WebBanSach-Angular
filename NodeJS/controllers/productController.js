const express=require('express');
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;
var {Product} = require('../models/product');

//list
router.get('/',(req,res)=>{
    Product.find((err,docs)=>{
        if(!err){res.send(docs); }
        else{
            console.log('Error in retriving Employees :',+JSON.stringify(err,undefined,2));
        }
    })
});
//detail
router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with given id:${req.params.id}`);
    }
        
    Product.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Retriving Employee: '+JSON.stringify(err,undefined,2));
        }
    });
});
//add
router.post('/',(req,res)=>{
    var product=new Product({
        name:req.body.name,
        productID:req.body.productID,
        price:req.body.price,
        description:req.body.description,
        imgPath:req.body.imgPath,
        cateID:req.body.cateID,
    });
    product.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Employee Save :'+JSON.stringify(err,undefined,2));
        }
    });
});
//edit
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with given id:${req.params.id}`);
    }

    var product={
        name:req.body.name,
        productID:req.body.productID,
        price:req.body.price,
        description:req.body.description,
        imgPath:req.body.imgPath,
        cateID:req.body.cateID,
    };
    Product.findByIdAndUpdate(req.params.id,{$set:product},{new:true},(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log(`Error in Employee Update: `+JSON.stringify(err,undefined,2));
        }
    })
})
//delete
router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No record with given id:${req.params.id}`);
    }
    Product.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log(`Error in Employee Update: `+JSON.stringify(err,undefined,2));
        }
    });
})
//category
router.get('/filter/:cateID',(req,res)=>{
        
    Product.find({cateID: req.params.cateID},(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Retriving Employee: '+JSON.stringify(err,undefined,2));
        }
    });
});
module.exports=router;