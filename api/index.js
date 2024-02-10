import express from 'express'
import dotenv from 'dotenv'
import mongoose  from 'mongoose'

dotenv.config()


mongoose
    .connect(process.env.MONGO)
    .then(()=> {
        console.log('DB connected successfully')
    })
    .catch((err)=>{
        console.log(err)
    })
const app = express()

app.listen(3000, () => {
    console.log("Server running succ on 3000!")
})