const {json}=require('express')
const bookModel =require("../Model/bookSchema")



exports.addbook=async(req,res)=>{
    const{name,author,price,img}=req.body

    try{
        const newBook= new bookModel({name,author,price,img})
        await newBook.save()
        res.status(200).json("Book Added Successfully")

    }
    catch(err){
        res.status(400).json("Cannot Add Room"+err)
       
    }


}

//view Books
exports.viewbooks=async(req,res)=>{
    try{
        const result=await bookModel.find();
        res.status(200).json(result.data)
    }
    catch(err){
        res.status(400).json("cannot Fetch"+err)
    }
}