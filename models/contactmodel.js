import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/myproject");
const ourschema=mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
email:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    date:{
    type:String,
    default:new Date().toUTCString()
   }
});
mongoose.models={};
export default mongoose.model("data",ourschema);
