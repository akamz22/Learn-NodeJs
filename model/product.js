import mongoose from 'mongoose';
const { Schema } = mongoose;




//Product Schema

const productSchema = new Schema({
    id: Number,
    title: { type: String, required: true ,unique: true },
    description: String,
    price: { required: true, type: Number, min: [0, 'wrong price'] },
    discountPercentage: { type: Number, min: [0, 'wrong min discount'], max: [50, 'wrong discount'] },
    rating: { type: Number, min: [0, 'wrong rating'], max: [5, 'wrong rating'] },
    stock: Number,
    brand: { type: String, required: true },
    category: String,
    thumbnail: { type: String, required: true },
    images: [String]
});

//Product model
const Product = mongoose.model('Product', productSchema);

export default Product;