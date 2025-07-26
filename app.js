import express from 'express'
import dotenv from 'dotenv'
import authRouter from './Routes/auth.routes.js';
import userRouter from './Routes/users.routes.js';
import subscriptionRouter from './Routes/subsription.routes.js';
import connectToDatabase from './Routes/database/connection.js';
dotenv.config()


const app = express();


app.use(express.json());

 connectToDatabase()

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/subsriptions',subscriptionRouter)




const PORT = process.env.PORT || 3000

app.listen(PORT ,async()=>{

    console.log(`Server has been connected on ${PORT}`)
    
})