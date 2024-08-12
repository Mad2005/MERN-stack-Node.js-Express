import express from "express";
import cors from "cors";
import AuthRoutes from "./routes/auth_routes.js";
import mongoose from "mongoose";
const app = express();
import bodyParser from "body-parser";
const port = 5000;
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://madhu:madhu@cluster0.eea6dwq.mongodb.net/demo?retryWrites=true&w=majority&appName=Cluster0",
{useNewUrlParser: true, useUnifiedTopology:true}
).then(()=>{
    console.log("connected to mongoDB");
})
.catch((err)=>{
    console.log(err.message);
});

app.get('/',(req,res)=>{
    res.send("Welcome to server")
});



app.use("/",AuthRoutes);
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});