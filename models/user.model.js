import mongoose from "mongoose";
const schema = mongoose.Schema;
const userSchema = new schema(
    {
        username:{
            type:String,
            required:true,
        }, 
        email:{
        type:String,
        required:true,
        },  
        password:{
            type:String,
            required:true,
            },
   
        avatar:{
           type:String,
           default:"default.jpg", 
        },
    }
);

const user = mongoose.model("user",userSchema);
export default user;

