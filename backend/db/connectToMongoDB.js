import mongoose from "mongoose";

const connectTOMongoDB=async()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URI)
       console.log("sucessfully connected to mongodb");
    } catch (error) {
        console.log("error in Mongodb connection:- ",error);
    }
}

export default connectTOMongoDB;