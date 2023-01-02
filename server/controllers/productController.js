const { ProductModel } = require("../db/product");


async function findPaginated({
  page = 1,
  pageSize = 90,
  sortBy = "createdAt",
  sortOrder = "desc",
  search = "",
  category,
}) {
  let query = {};
  let x = [];
  if (category && category != "" && category != "all") {
    x.push({ category: { $eq: category } });
  }
  query = {
    $and: x,
  };

  const totalProducts = await ProductModel.count({});
  console.log("---pageSize", pageSize)

  const products = await ProductModel.find({}, '-__v -createdAt -updatedAt')
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
  const product = await ProductModel.insertMany(productData);


  return product;
}

module.exports = {
  createProduct,
  findPaginated
}