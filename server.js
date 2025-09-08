const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const cors = require("cors")


const userRoutes = require ("./Routes/userRouter")
//middlewares
app.use(express.json())
app.use(cors())

app.get("/", (req,res)=> {
    res.send("server is running")

})
app.use("/api/user", userRoutes)

const startServer = async()=>{
    try {
        await mongoose.connect(process.env.mongo_url,)
        console.log("Mongo DB connected");
        console.log("About to start server");
        
        const PORT = process.env.PORT
        app.listen(PORT, ()=>{
            console.log(`App running on port : ${PORT}`);    
        })
    } catch (error) {
        console.log(error);
    }
}
startServer()
