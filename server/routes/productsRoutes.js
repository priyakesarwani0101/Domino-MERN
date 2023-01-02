const express = require('express')
const productRouter = express.Router()
const auth = require('../middleware/auth');

const productControllers = require('../controllers/productController');


// READ
productRouter.get('/products', async (req, res) => {
    const {
        page = 1,
        pageSize = 90,
        sortBy = 'dateOfJoining',
        sortOrder = 'desc',
        search = '',
        category
    } = req.query

    const { totalProducts, products } = await productControllers.findPaginated({
        search, page, pageSize, sortBy, sortOrder, category
    });

    res.send({
        totalRecords: totalProducts,
        data: products
    })
})

// // CREATE
productRouter.post('/product', async (req, res) => {

    const productData = req.body;

    let product = null;
    try {
        product = await productControllers.createProduct(productData);
    } catch (err) {
        console.error(err.message);

        return res.status(500).send({
            message: err.message // 'Server ran into an unexpected error'
        })
    }

    return res.send({
        data: product
    });
})

module.exports = productRouter;