import express from 'express';
import morgan from 'morgan';
import productRouter from './routes/product.js';
import userRouter from './routes/user.js';
const app = express();

//Body Parser
app.use(express.json());
app.use(morgan('combined'));//To print details of api calls
app.use(express.static('public'));
app.use('/products',productRouter)
app.use('/users',userRouter)

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
})