const express=require("express");
const mongoose=require("mongoose");
const {createActivity}=require("./controllers/activityController");
const {getActivity}=require("./controllers/activityController");
const {deleteActivity}=require("./controllers/activityController");
const cors=require("cors");
const dns = require('dns');
dns.setServers(['8.8.8.8','8.8.4.4']);
const app = express();
app.use(express.json());
app.use(cors());
const mongourl="mongodb+srv://jellokepe_db_user:sanmongo%5Bdb00@cluster0.mjxnhdh.mongodb.net/?appName=Cluster0";
mongoose
.connect(mongourl)
.then(()=>console.log("MongoDB connected successfully"))
.catch((err)=>console.log("Unable to connect to MongoDB",err));
 //const helloWorldFunction=(req,res)=>
   // res.send("Hello San!");
//};

//http://localhost:8080
app.post(["/Create", "/create"], createActivity);
app.get("/", getActivity);
app.delete("/delete/:id", deleteActivity);

app.listen(8080, () =>{
    console.log('Server listening at port 8080');
});