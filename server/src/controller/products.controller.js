const express = require('express')
const {createProduct, getAllProducts, getProductById, updateProductById, deleteProductById } = require('../service/products.service');


const product = express.Router()

product.post('/', async (req, res) => {
    try {
        const { category, title, price } = req.body;
        const result = await createProduct(category, title, price);
        res.send(result)
    } catch (err) {
        res.send(err.message)
    }
})

product.get('/', async (req, res) => {
    try {
        const result = await getAllProducts()
        res.send(result)
    } catch (err) {
        res.send(err.message)
    }

})

product.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const result = await getProductById(id)
        res.send(result)
    } catch (err) {
        res.send(err.message)
    }

})

product.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { category, title, price} = req.body
        const result = await updateProductById( category, title, price, id)
        res.send(result)
    } catch (err) {
        res.send(err.message)
    }
})

product.delete('/:id', async (req, res) =>{
    try{
    const {id} = req.params;
    const result = await deleteProductById(id);
    res.send(result)
    }catch(err){
        res.send(err.message)
    }

})



module.exports = product