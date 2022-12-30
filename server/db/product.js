const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: String,
    image: String,
    category: String,
    price: String,
    rating:String
}, {
    timestamps: true
})

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = {
    ProductModel
}