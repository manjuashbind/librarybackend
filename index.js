require('dotenv').config()
const express=require('express')
const app=express();

const cors=require('cors')
const router=require('./Router/Route')
const db=require('./db')
// const appMiddleware=require('./Middleware/appMiddleware')

app.use(cors())

app.use(express.json())
app.use(router)
// app.use(appMiddleware)


const port=4000 || process.env.port;
app.listen(port,()=>{console.log("Node server started with nodemon")})

app.get("/",(req,res)=>{
    res.send('<h1>Library app is started</h1>')
})