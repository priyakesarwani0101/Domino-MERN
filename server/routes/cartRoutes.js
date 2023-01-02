const express = require('express')
const cartRouter = express.Router()
const auth = require('../middleware/auth');

const cartControllers = require('../controllers/cartController');


cartRouter.post('/cart', auth, async (req, res) => {
    const cartData = req.body;
    let userId = req.user._id
    let cart = null;
    try {
        cart = await cartControllers.createCart(userId, cartData);
    } catch (err) {
        console.error(err.message);

        return res.status(500).send({
            message: err.message // 'Server ran into an unexpected error'
        })
    }
    return res.send(cart);
})


cartRouter.get('/cart', auth, async (req, res) => {

    try {
        cart = await cartControllers.getCart(req.user._id);
    } catch (err) {
        return res.status(500).send({
            message: err.message
        })
    }
    return res.send(cart[0]);
})


cartRouter.patch('/cart', auth, async (req, res) => {
    const x = await cartControllers.patchCartProduct(req.body, req.user._id)
    return res.send(x)
})


cartRouter.delete('/cart', auth, async (req, res) => {

    const x = await cartControllers.deleteCartProduct(req.body, req.user._id)
    return res.send(x)
})


module.exports = cartRouter