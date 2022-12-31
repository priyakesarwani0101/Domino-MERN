const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: String,
    image: String,
    category: String,
    price: Double,
    rating: Double
}, {
    timestamps: true
})

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = {
    ProductModel
}