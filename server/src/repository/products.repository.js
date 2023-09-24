const mongoose = require('../db');
const Product = require('../schemas/dbProductsSchemas')

async function createProductDB(category, title, price){
    const product = new Product({
        category, 
        title, 
        price
    });

    const saveProduct = await product.save()
    return saveProduct
}


async function getAllProductsDB() {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      console.error('Error getting products:', error);
      throw error;
    }
  }
  
  async function getProductByIdDB(id) {
    try {
      const product = await Product.findById(id);
      return product;
    } catch (error) {
      console.error('Error getting product by ID:', error);
      throw error;
    }
  }
  
  async function updateProductByIdDB(id, updatedData) {
    try {
      const product = await Product.findByIdAndUpdate(id, updatedData, { new: true });
      return product;
    } catch (error) {
      console.error('Error updating product by ID:', error);
      throw error;
    }
  }
  
  async function deleteProductByIdDB(id) {
    try {
      const product = await Product.findByIdAndDelete(id);
      return product;
    } catch (error) {
      console.error('Error deleting product by ID:', error);
      throw error;
    }
  }


module.exports = {createProductDB, getAllProductsDB, getProductByIdDB, updateProductByIdDB, deleteProductByIdDB}