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