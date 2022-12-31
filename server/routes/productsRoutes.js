// READ
productRouter.get('/products', auth,  async (req, res) => {
    const userId = req.user._id;
    const {
        page = 1,
        pageSize = 20,
        sortBy = 'dateOfJoining',
        sortOrder = 'desc',
        search = '',
        status,
        category
    } = req.query

    const {totalProducts, products} = await productControllers.findPaginated({
        search, page, pageSize, sortBy, sortOrder, userId, status, category
    });

    res.send({
        totalRecords: totalProducts,
        data: products
    })
})

// CREATE
productRouter.post('/product', async (req, res) => {

    const productData = req.body;

    let product = null;
    try {
        product = await productControllers.createProduct(userId, productData);
    } catch(err) {
        console.error(err.message);

        return res.status(500).send({
            message: err.message // 'Server ran into an unexpected error'
        })
    }

    return res.send({
        data: product
    });
})