import mongoose, { Types } from "mongoose";

const userSchema = mongoose.Schema({
fullName:{
    type:String,
    required:true,
    lowercase:true
},
username:{
    type:String,
    required:true,
    unique:true,
},
password:{
    type:String,
    required:true,
    minlength:6,
},
gender:{
    type:String,
    required:true,
    enm:["male","female"],
    deafult:"male",
},
profilePic:{
    type:String,
    default:""
}
},{timestamps:true})

const User = mongoose.model('User',userSchema)

export default User;