import express from 'express'
import dotenv from 'dotenv'
import authRouter from './Routes/auth.routes';
import userRouter from './Routes/users.routes';
import subscriptionRouter from './Routes/subsription.routes';
dotenv.config()


const app = express();


app.use(express.json());



app.use('/api/v1/auth',authRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/subsriptions',subscriptionRouter)




const PORT = process.env.PORT || 3000

app.listen(PORT ,()=>console.log(`Server has been connected on ${PORT}`))