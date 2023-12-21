const { Day, Product } = require('../../models');

const addProductToDay = async (req, res, next) => {
  try {
    const { date, productId, weight } = req.body;

    // Buscar o crear el día correspondiente
    let day = await Day.findOne({ date });

    if (!day) {
      // Si no se encuentra un día, crea uno nuevo
      day = new Day({ date, eatenProducts: [] });
    }

    // Buscar el producto correspondiente por su ID
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Agregar el producto consumido al día
    const eatenProduct = {
      productId,
      title: product.title, // Usar el nombre real del producto
      weight,
    };

    day.eatenProducts.push(eatenProduct);

    // Guardar el día actualizado en la base de datos
    await day.save();

    // Respuesta con el formato esperado
    const response = {
      eatenProduct,
      day: {
        id: day._id,
        date: day.date,
        eatenProducts: day.eatenProducts,
      },
    };

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = addProductToDay;
