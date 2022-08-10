import mongoose from "mongoose"
import data from "../../models/contactmodel";
mongoose.connect("mongodb://localhost:27017/myproject");

export default async function handler(req, res) {
    if (req.method === 'POST') {
const p=new data(req.body);
    await p.save();
    console.log(p);
    res.status(200).json({success:"success"});
}
 else {
      res.status(500).json({error:"error"});
    }
  }