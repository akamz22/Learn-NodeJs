
import {createProduct, getAllProducts, getProductById, deleteProductById, updateProduct, patchProduct } from '../controller/product.js'
import express from 'express';
const productRouter = express.Router();

productRouter.post('/', createProduct)
.get('/', getAllProducts)
.get('/:id', getProductById)
.put('/:id', updateProduct)
.patch('/:id', patchProduct)
.delete('/:id', deleteProductById)

export default productRouter