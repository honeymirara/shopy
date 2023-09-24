const { createProductDB, getAllProductsDB, getProductByIdDB, updateProductByIdDB, deleteProductByIdDB  } = require('../repository/products.repository');

async function createProduct(category, title, price) {
    const data = await createProductDB(category, title, price)
    return data;
}

async function getAllProducts() {
    const data = await getAllProductsDB()
    return data;
}

async function getProductById(id) {
    const data = await getProductByIdDB(id)
    return data;
}

async function updateProductById(category, title, price, id) {
    const updatedData = { category, title, price, id};
    const result = await updateProductByIdDB(id, updatedData);
    return result;
}


async function deleteProductById(id) {
    const result = await deleteProductByIdDB(id)
    return result;
}


module.exports = {createProduct, getAllProducts, getProductById, updateProductById, deleteProductById}