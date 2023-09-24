const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    category: String,
    title: String,
    price: Number
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product;