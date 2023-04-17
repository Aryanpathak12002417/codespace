const express=require('express')
const dotenv=require('dotenv').config()
const bcrypt=require('bcryptjs')
const token=require('jsonwebtoken')
const cookieParser=require('cookie-parser')
const db=require('./database.js')
const User=require('./Models/User.js')
const cors=require('cors')
// const {router,d}=require('./Database/databaseMongo.js')

const app=express();
app.use(cors())




//Local Modules
const generateToken=require('./Authentication/tokenGeneration.js')


const user_password='aryan#234'

//Setting Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.get('/user',(req,res)=>{
    res.send([{message:"Hello"}])
})


app.post('/register',(req,res)=>{

    const {name,phone,email,password,cpassword}=req.body;
    db.execute(`INSERT INTO users VALUES(?,?,?,?,?)`,[0,name,email,phone,password]).then((result)=>{
        let Token=generateToken(email);
        res.cookie('token',Token,{httpOnly:true})
        res.status(200).json({success:true})
    }).catch((err)=>{
        console.log(err);
        res.status(200).json({success:false})
    })

})


app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    console.log(email,password);
    db.execute(`SELECT * FROM users WHERE email=? AND user_password=?`,[email,password]).then((result)=>{
        const data=result[0];
        console.log(data)
        if(data.length>=1){
            let Token=generateToken(email);
            res.cookie('token',Token,{httpOnly:true})
            res.status(200).json({success:true})
        }
        else{
            res.status(200).json({success:false,message:"Wrong User Name Password"})
        }
    }).catch((err)=>{
        console.log(err);
        res.status(200).json({success:false,message:"Error Occured.Please Login After Some Time"})
    })

})



app.get('/api/user',(req,res)=>{

    const {query} =req.query;
    console.log(req.body)
    console.log(query)
    db.execute('SELECT * FROM EMPLOYEE').then((data)=>{
        //Nested db Statement to check your answer
        let res1=JSON.stringify(data[0])
        db.execute(`${query}`).then((result)=>{
            let res2=JSON.stringify(result[0]);
            if(res1==res2){
                res.status(200).send([{success:true,message:'All test case pass'}])
            }
            else{
                res.status(200).send([{success:false,message:'Wrong Answer'}])
            }
        }).catch((err)=>{
            console.log(err.sqlMessage);
            res.status(200).send([{success:false,message:err.sqlMessage}])
        })
    }).catch((err)=>{
        console.log(err);
        res.status(200).send(err.sqlMessage)
    })
})

app.post('/register',async(req,res)=>{
    var hash = bcrypt.hashSync(user_password, 10); //generate a hash password.
    let Token=generateToken(user_password);//generate a signup token generation.
    Token =bcrypt.hashSync(Token,2)        //Encrypting the token that we are sending using salting 2 times.
    res.cookie('User',Token,{httpOnly:true});
    console.log(Token)
    res.status(200).send('<h1>User Registered</h1>')
})


app.listen(4000,(req,res)=>{
    console.log('The server is running at',process.env.PORT)
})
