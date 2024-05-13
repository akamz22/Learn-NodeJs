import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import productRouter from './routes/product.js';
import userRouter from './routes/user.js';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();

//Body Parser
dotenv.config();
const port  = process.env.PORT;
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connection established");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}
connectToDatabase();

app.use(cors());

app.use(express.json());
//To print details of api calls
app.use(morgan('combined'));
app.use('/products',productRouter)
app.use('/users',userRouter)
app.listen(port, () => {
    console.log('Server is listening on port',port);
})