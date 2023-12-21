const { Day } = require('../../models');

// Obtiene un día por fecha
const getDayByDate = async date => {
  return Day.findOne({ date });
};

// Crea un nuevo día ok
const createDay = async date => {
  return new Day({ date, eatenProducts: [] }).save();
};

// Añade un producto consumido a un día existente
const addProductToDay = async (day, product) => {
  day.eatenProducts.push(product);
  return day.save();
};

module.exports = {
  getDayByDate,
  createDay,
  addProductToDay,
};
