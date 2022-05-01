const express=require('express');
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;

var {User} = require('../models/user');

//=>localhost:3000/employees/
//list
router.get('/',(req,res)=>{
    User.find((err,docs)=>{
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
        
    User.findById(req.params.id,(err,doc)=>{
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
    var user=new User({
        fullName:req.body.fullName,
        email:req.body.email,
        password:req.body.password
    });
    user.save((err,doc)=>{
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

    var user={
        fullName:req.body.fullName,
        email:req.body.email,
        password:req.body.password
    };
    User.findByIdAndUpdate(req.params.id,{$set:this.user},{new:true},(err,doc)=>{
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
    User.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log(`Error in Employee Update: `+JSON.stringify(err,undefined,2));
        }
    });
})

router.get('/usermail/:email',(req,res)=>{
    // if(!ObjectId.isValid(req.params.id)){
    //     return res.status(400).send(`No record with given id:${req.params.id}`);
    // }
    
    User.find({email:req.params.email},(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log('Error in Retriving User: '+JSON.stringify(err,undefined,2));
        }
    });
});


module.exports=router;