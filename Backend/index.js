const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors')
const path = require('path');
const ProductRoutes = require('./Routes/ProductRoutes');

const app=express();  
const port=3002;  
//middleware
 app.use(express.json()) ;
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve images



//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/products')
.then(()=>{ console.log('Connected to MongoDB')})
.catch((err)=>{ console.log('Error:',err)});

app.use('/api/products', ProductRoutes);

app.listen(port,()=>{  console.log('Server is running on port 3002')})