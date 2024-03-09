const mongoose=require('mongoose')
const bookSchema=mongoose.Schema({
name:{
    type:String,required:true
},
author:{
    type:String,required:true
},
price:{
    type:String,required:true
},
img:{
    type:String,required:true
}

},{
    timestamps:true
})
const bookModel=mongoose.model("books",bookSchema)
module.exports=bookModel