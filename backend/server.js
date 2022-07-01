require("dotenv").config()
const express =require('express');

const workoutRouter=require('./routes/Workouts');
// express
const app=express();

// middleware
app.use(express.json())
app.use((req,res,next)=>{
console.log(req.path,req.method)
next()
})
// listen for req


app.use("/api/workouts",workoutRouter)


app.listen(process.env.PORT,()=>{
    console.log('listening on port 4000')
})