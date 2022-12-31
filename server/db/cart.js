const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    
    totalCartValue:String,
    userId: mongoose.Types.ObjectId
}, {
    timestamps: true
})

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = {
    ProductModel
}