const userschema=require('./mongodb/mongodb');
const express = require('express');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey='1234';

//const variable='mongodb+srv://mohankrishnasomineni2002:uesskG81CGhOD593@cluster0.lvoz9si.mongodb.net/register';
// const router=require("./controllers/Routes")
const variable='mongodb+srv://parthu1279:Parthu2244@cluster0.fz29e4t.mongodb.net/Mohanregister'
const { MongoClient } = require('mongodb');
try{
    mongoose.connect(variable);
}catch(e){
    console.log(e);
}
const userSchema=require('./mongodb/mongodb');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());




app.post('/register',async (req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const cpassword=req.body.cpassword;
    console.log(username)
    if (cpassword !== password) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      // const token = jwt.sign(username, 'abccgdergff', { expiresIn: '1h' });
      // console.log(token)
      const newUser = await userSchema.create({ username, password: hashedPassword });
      console.log('User created:', newUser);
  
      res.status(201).json({ message: "User created successfully",id:username });
       
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
     
  });
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await userSchema.findOne({ username });
  
      if (!user) {
        res.status(401).json({ status: 401, message: 'Invalid username or password' });
        return;
      }
      bcrypt.compare(password, user.password, (err, isPasswordValid) => {
        if (err) {
          console.error(err);
          res.status(500).json({ status: 500, message: 'Internal server error' });
          return;
        }
    
        if (!isPasswordValid) {
          res.status(401).json({ status: 401, message: 'Invalid username or password' });
          return;
        }
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: 500, message: 'Internal server error' });
    }
    res.status(200).json({status:200,message:"Login Successful"});

  });
const PORT=5000;
app.listen(PORT,()=>{
    console.log('Server is Running');
});