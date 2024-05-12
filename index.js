import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import productRouter from './routes/product.js';
import userRouter from './routes/user.js';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const app = express();

//Body Parser
dotenv.config();
const port  = process.env.PORT || 8080;
console.log('env : ',process.env.DB_PASSWORD);


async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
        console.log("Database connection established");
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

// Call the async function
connectToDatabase();

//Product Schema

const productSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]
});

//Product model
const Product = mongoose.model('Product', productSchema);






app.use(express.json());
//To print details of api calls
app.use(morgan('combined'));
app.use(express.static('public'));
app.use('/products',productRouter)
app.use('/users',userRouter)

app.listen(port, () => {
    console.log('Server is listening on port 8080');
})