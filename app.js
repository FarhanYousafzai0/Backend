import express from 'express'
import dotenv from 'dotenv'
import authRouter from './Routes/auth.routes.js';
import userRouter from './Routes/users.routes.js';
import subscriptionRouter from './Routes/subsription.routes.js';


import cookieParser from 'cookie-parser';
import connectToDatabase from './Database/connection.js';
import errorMiddleware from './Middlewares/error.middleware.js';
import arjetMiddleware from './Middlewares/arjet.middleware.js';
dotenv.config()


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(errorMiddleware);
app.use(arjetMiddleware);

// Connect To Database:
 connectToDatabase()

//  Routes
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/users',userRouter)
app.use('/api/v1/subsriptions',subscriptionRouter)







// Server :
const PORT = process.env.PORT || 3000

app.listen(PORT ,async()=>{
    console.log(`Server has been connected on ${PORT}`)
    
})