import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import productRouter from './routes/product.js';
import userRouter from './routes/user.js';
import mongoose from 'mongoose';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const app = express();

//Body Parser
dotenv.config();
const port  = process.env.PORT || 8080;
// console.log('env : ',process.env.DB_PASSWORD);


async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Database connection established");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

// Call the async function
connectToDatabase();




const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());

app.use(express.json());
//To print details of api calls
app.use(morgan('combined'));
app.use(express.static(process.env.PUBLIC_DIR));
app.use('/products',productRouter)
app.use('/users',userRouter)
app.use('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
})
app.listen(port, () => {
    console.log('Server is listening on port 8080');
})