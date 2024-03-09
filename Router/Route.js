const express=require('express')

const appMiddleware=require('../Middleware/appMiddleware')
const bookController=require('../Controllers/bookController')
const router=new express.Router()

router.post('/addbook',bookController.addbook)

router.get('/viewbooks',bookController.viewbooks)

module.exports=router