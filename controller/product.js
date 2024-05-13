import Product from '../model/product.js'
//CREATE POST /products
const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save()
        console.log(savedProduct);
        res.json({ type: "POST Successfull", savedProduct })
    } catch (error) {
        res.status(400).json(error);
    }
}

//READ data Get Products 
const getAllProducts = async (req, res) => {
    const products = await Product.find()//to fetch all
    // const products = await Product.find({price:{$gt:1000}})//To fetch by condition
    // const products = await Product.findOne({id:2})//To in form of object fetch by condition
    res.json(products)
}
//READ data Get One Product by id 
const getProductById = async(req, res) => {
    const idToFind = req.params.id;
    const products = await Product.findById(idToFind);
    res.json(products)
}

//PUT UPDATE data Get Products --> Replace one product data completly 
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const doc = await Product.findOneAndReplace({ _id: id }, req.body, { new: true });
        res.status(201).json(doc);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}
//PATCH UPDATE data Get Products --> Update Existing Data
const patchProduct = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(201).json(doc);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

//DELETE  /products/:id
const deleteProductById = async(req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const doc = await Product.findOneAndDelete({ _id: id }, req.body, { new: true });
        res.status(201).json(doc);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}


export { createProduct, getAllProducts, getProductById, deleteProductById, updateProduct, patchProduct }






