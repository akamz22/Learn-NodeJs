import fs from 'fs';
const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const products = data.products;


//CREATE POST /products
const createProduct = (req, res) => {
    console.log(req.body);
    products.push(req.body)
    res.json({ type: "POST Successfull", data: req.body })
}

//READ data Get Products 
const getAllProducts = (req, res) => {
    res.json(data)
}
//READ data Get One Product by id 
const getProductById = (req, res) => {
    const id = +req.params.id;
    const product = products.find(p => p.id === id)
    res.json(product)
}

//UPDATE data Get Products -->
const updateProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    products.splice([productIndex], 1, { ...req.body, id: id })
    res.json(products)
}
//UPDATE data Get Products -->
const patchProduct = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);

    const product = products[productIndex];
    products.splice([productIndex], 1, { ...product, ...req.body })
    res.json(products)
}

//DELETE  /products/:id
const deleteProductById = (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    const deletedData = products[productIndex]
    products.splice([productIndex], 1)
    res.status(201).json(
        {
            deleted: deletedData,
            data: products
        })
}


export { createProduct,getAllProducts, getProductById, deleteProductById, updateProduct, patchProduct}






