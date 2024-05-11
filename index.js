import fs from 'fs';
import express, { urlencoded } from 'express';
import morgan from 'morgan';

const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const products = data.products;

const app = express();


//Body Parser
app.use(express.json());
app.use(morgan('combined'));
app.use(express.static('public'));



//Auth middleware will be used on all paths
//app.use(auth)


// API -- End Point 
//API ROOT  , base URL , e.g-google.com/api/v2


//-------------CRUD----------------

//CREATE POST /products
app.post('/products', (req, res) => {
    console.log(req.body);
    products.push(req.body)
    res.json({ type: "POST Successfull", data: req.body })
})

//READ data Get Products 
app.get('/products', (req, res) => {
    res.json(products)
})
app.get('/products/:id', (req, res) => {
    const id = +req.params.id;
    const product = products.find(p => p.id === id)
    res.json(product)
})

//UPDATE data Get Products -->
app.put('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    products.splice([productIndex], 1, { ...req.body, id: id })
    res.json(products)
})
//UPDATE data Get Products 
app.patch('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);

    const product = products[productIndex];
    products.splice([productIndex], 1, { ...product, ...req.body })
    res.json(products)
})

//DELETE  /products/:id
app.delete('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    const deletedData = products[productIndex]
    products.splice([productIndex], 1)
    res.status(201).json(
        {
            deleted: deletedData,
            data: products
        })
})







app.get('/demo', (req, res) => {
    // res.send("<h1>Hello</h1>");
    // res.json(data)
    // res.sendFile('D:/PROJECTS/Learn-NodeJs/index.html')
})





app.listen(8080, () => {
    console.log('Server is listening on port 8080');
})