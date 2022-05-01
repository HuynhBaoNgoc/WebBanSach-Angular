const express=require('express');
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;

var {Category} = require('../models/category');

//=>localhost:3000/employees/
//list
router.get('/',(req,res)=>{
    Category.find((err,docs)=>{
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
        
    Category.findById(req.params.id,(err,doc)=>{
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
    var category=new Category({
        name:req.body.name,
        cateID:req.body.cateID,
    });
    category.save((err,doc)=>{
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

    var category={
        name:req.body.name,
        cateID:req.body.cateID,
    };
    Category.findByIdAndUpdate(req.params.id,{$set:category},{new:true},(err,doc)=>{
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
    Category.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log(`Error in Employee Update: `+JSON.stringify(err,undefined,2));
        }
    });
})

module.exports=router;