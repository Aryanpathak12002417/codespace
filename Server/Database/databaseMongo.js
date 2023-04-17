const mongoose = require('mongoose');
const express=require('express');
const app=express();

const router=express.Router()
const MONGODB_URI = 'mongodb://127.0.0.1:27017/';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const mb = mongoose.connection;

mb.on('error', console.error.bind(console, 'MongoDB connection error:'));
mb.once('open', () => {
  console.log('MongoDB connection successful!');
});

async function createUser(name, phone, email, password) {
  const newUser = { name, phone, email, password };
  const result = await db.collection('users').insertOne(newUser);
  return result.insertedId;
}

// READ operation
async function getUser(e,p) {
  const result = await db.collection('users').findOne({email:e,password:p});
  return result;
}

// UPDATE operation
async function updateUser(id, updates) {
  const result = await db.collection('users').updateOne({ _id: ObjectId(id) }, { $set: updates });
  return result.modifiedCount;
}

// DELETE operation
async function deleteUser(id) {
  const result = await db.collection('users').deleteOne({ _id: ObjectId(id) });
  return result.deletedCount;
}


router.post('/login',(req,res)=>{
  const{name,password}=req.body();
  const result=getUser(name,password)
  if(result.length>=1){
    res.status(200).json({success:true})
  }
  else{
    res.status(200).json({success:false,message:'Error Occured Please try again letter'})
  }
  
})

router.post('/register',(req,res)=>{
  const{name,password,phone,email}=req.body();
  const result=createUser(name,phone,email,this.password)
  if(result.length>=1){
    res.status(200).json({success:true})
  }
  else{
    res.status(200).json({success:false,message:'Error Occured Please try again letter'})
  }
  
})

module.exports=router;
module.exports = mb;