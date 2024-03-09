const mongoose=require('mongoose')
const connectionstring=process.env.DATABASE
mongoose.connect(connectionstring)
.then(()=>{
    console.log("Mongodb connection established");
})
.catch((err)=>{
    console.log("mongodb connection error");
})

 module.exports=mongoose