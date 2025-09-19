import mongoose from 'mongoose';

const refreshTokenSchema = new mongoose.Schema({
    tokenHash:String,
    ip:String,
    userAgent:String,
    createdAt:{type:Date, default:Date.now()},
    expiresAt:Date
});

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    passwordHash:String,
    refreshTokens:[refreshTokenSchema],
},{timestamps:true})

export default mongoose.model('User',userSchema)