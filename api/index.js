import express from 'express'
import dotenv from 'dotenv'
import mongoose  from 'mongoose'

import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

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
    console.log("Server running succ on 3000!!!")
})

app.use(express.json())
app.use('/api/user',userRouter)

app.use('/api/auth',authRouter)