import path from 'path'
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectTOMongoDB from "./db/connectToMongodb.js"
import { app, server } from "./socket/socket.js"


const __dirname = path.resolve()
dotenv.config()


const PORT = process.env.PORT


app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

server.listen(PORT,()=>{
    connectTOMongoDB();
    console.log(`the app is listening on port = ${PORT}`)
})