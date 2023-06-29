const express = require('express')
require("dotenv").config(); 
// const session = require('express-session')
// const globalErrHandler = require("./middlewares/globalHandler")
// const MongoStore  = require("connect-mongo")
require('./config/dbconnect')

const userRoutes = require('./routes/user/users')
const postRoutes = require('./routes/posts/posts')
const commentRoutes=require('./routes/comment/comment')
const app = express()

//user routes
app.use('/api/v1/users',userRoutes)

//posts routes
app.use('/api/v1/posts',postRoutes)


//comment routes
app.use('/api/v1/comments',commentRoutes)
app.post("/api/v1/users/register",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"User Details"
        })
    } catch(error){
        res.json(error)
    }
})


// get users id
app.post("/api/v1/users/login",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"User Details"
        })
    } catch(error){
        res.json(error)
    }
})


app.get("/api/v1/users/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"User Details"
        })
    } catch(error){
        res.json(error)
    }
})
app.get("/api/v1/users/proile/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"User Details"
        })
    } catch(error){
        res.json(error)
    }
})
app.put("/api/v1/users/profile-photo-upload/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"User profile photo upload"
        })
    } catch(error){
        res.json(error)
    }
})

app.put("/api/v1/users/cover-photo-upload/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"User cover photo upload"
        })
    } catch(error){
        res.json(error)
    }
})
app.put("/api/v1/users/password-update/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"User password update"
        })
    } catch(error){
        res.json(error)
    }
})

app.put("/api/v1/users/update/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"User update"
        })
    } catch(error){
        res.json(error)
    }
})

app.get("/api/v1/users/logout/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"User logout details"
        })
    } catch(error){
        res.json(error)
    }
})


app.post("/api/v1/posts",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"Post created "
        })
    } catch(error){
        res.json(error)
    }
})
app.get("/api/v1/posts",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"Posts lists "
        })
    } catch(error){
        res.json(error)
    }
})
app.get("/api/v1/posts/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"Posts details"
        })
    } catch(error){
        res.json(error)
    }
})

app.delete("/api/v1/posts/:id",async(req,res)=>{
    try{
        res.json({
            status:"s uccess",
            user:"Posts deleted"
        })
    } catch(error){
        res.json(error)
    }
})
app.put("/api/v1/posts/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"Posts updated"
        })
    } catch(error){
        res.json(error)
    }
})



app.post("/api/v1/comments",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"comment created"
        })
    } catch(error){
        res.json(error)
    }
})

app.get("/api/v1/comments/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"comment created"
        })
    } catch(error){
        res.json(error)
    }
})

app.delete("/api/v1/comments/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"comment deleted"
        })
    } catch(error){
        res.json(error)
    }
})
app.put("/api/v1/comments/:id",async(req,res)=>{
    try{
        res.json({
            status:"success",
            user:"comment updated"
        })
    } catch(error){
        res.json(error)
    }
})
const port = process.env.PORT || 6000;

app.listen(port,console.log(`The server is running on port${port}`));