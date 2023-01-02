const { CartModel } = require('../db/cart')

async function createCart(userId, cartData) {

    var cart = await CartModel.findOne({ userId: userId }) || { products: [], subtotal: 0 }
    var flag = true
    cart.products.forEach((x) => {
        if (x._id == cartData[0]._id) {
            flag = false
            x.quantity++
        }
    });
    cart.subtotal += cartData[0].price;
    if (flag) {
        cart['products'] = [...cart.products, ...cartData];
    }
    cart['userId'] = userId
    await CartModel.updateOne({ userId: userId }, cart, {
        upsert: true
    })

    return cart;
}

async function getCart(userId) {
    return await CartModel.find({ userId: userId }, '-__v -createdAt -updatedAt')
}

async function patchCartProduct(productData, userId) {
    var cart = await CartModel.findOne({ userId: userId }) || { products: [], subtotal: 0 }
    cart.products.forEach((x, i) => {
        if (x._id == productData._id) {
            if (x.quantity === 1) {
                cart.products.splice(i, i + 1)
            } else {
                x.quantity--;
            }
        }
    })
    cart.subtotal -= productData.price
    cart['userId'] = userId
    await CartModel.updateOne({ userId: userId }, cart)
    return productData;
}

async function deleteCartProduct(productData, userId) {
    var cart = await CartModel.findOne({ userId: userId }) || { products: [], subtotal: 0 }
    cart.products.forEach((x, i) => {
        if (x._id == productData[0]._id) {
            cart.subtotal -= cart.products[i].price * cart.products[i].price
            cart.products.splice(i, i + 1)
        }
    })
    cart['userId'] = userId
    await CartModel.updateOne({ userId: userId }, cart)
    return cart.products;
}


module.exports = {
    createCart,
    getCart,
    deleteCartProduct,
    patchCartProduct
}