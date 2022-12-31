const { ProductModel } = require("../db/product");
const { UserModel } = require("../db/user");
async function findPaginated({
    page = 1,
    pageSize = 10,
    sortBy = "createdAt",
    sortOrder = "desc",
    search = "",
    userId,
    status,
    category,
  }) {
    let query = {};
    let x = [{ "user._id": { $eq: userId } }];
    if (status && status != "" && status != "all") {
      x.push({ status: { $eq: status } });
    }
    if (category && category != "" && category != "all") {
      x.push({ category: { $eq: category } });
    }
    query = {
      $and: x,
    };
  
    const totalProducts = await ProductModel.count(query);
  
    const products = await ProductModel.find(query)
      .sort({
        [sortBy]: sortOrder == "asc" ? 1 : -1,
      })
      .skip((page - 1) * pageSize)
      .limit(pageSize);
    return {
      totalProducts,
      products,
    };
  }


  async function createProduct(productData) {
    const product = await ProductModel.create({
      title: productData.title,
      image: productData.image,
      category: productData.category,
      ratings: productData.ratings,
      price: productData.price });
  
  
    return product;
  }