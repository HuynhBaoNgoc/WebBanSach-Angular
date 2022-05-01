const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const {mongoose}=require('./db.js');
var productController=require('./controllers/productController.js');
var categoryController=require('./controllers/categoryController.js');
var userController=require('./controllers/userController.js');

var app=express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000,()=>console.log('Server stated at pot: 3000'));

app.use('/products',productController); 
app.use('/categories',categoryController); 
app.use('/user',userController); 