const dotenv=require('dotenv')
const token=require('jsonwebtoken')
const bcrypt=require('bcryptjs')


const userAuth=(req,res,next)=>{

    let Token=req.body.token
    
    if(!Token){
        return false;
    }
    else{
        try{
            token.verify(Token,process.env.SECERT_KEY_USER_AUTH)
        }
        catch(err){
            console.log('Not a Valid user')
            res.status(401).json({userAuth:false})
        }
    }
    next();
}

module.export=userAuth