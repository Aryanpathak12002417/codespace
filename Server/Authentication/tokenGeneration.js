const token=require('jsonwebtoken')
const dotenv=require('dotenv')

const generateToken=(data)=>{
    const Token=token.sign({id:data},process.env.SECERT_KEY_USER_AUTH)
    return Token;
}

module.exports=generateToken;