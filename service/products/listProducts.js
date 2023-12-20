/* Product.find() */
const { Product } = require("../../models");

const listProducts = async (skip, limit, favorite, userId) => {
  try {
    const listProducts = await Product.find({}).skip(skip).limit(Number(limit));
    console.log(listProducts);
    return listProducts;
  } catch (error) {
    console.log("Error de servicio", error);
  }
};

module.exports = listProducts;
