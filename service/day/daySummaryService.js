const { Day, Product, DaySummary } = require('../../models');

const addProductToDay = async (req, res, next) => {
  try {
    const { date, productId } = req.body;

    // Buscar o crear el día correspondiente
    let day = await Day.findOne({ date });

    if (!day) {
      // Si no se encuentra un día, crea uno nuevo
      day = new Day({ date, eatenProducts: [] });
    }

    // Buscar el producto correspondiente por su ID
    const product = await Product.findById(productId);

    if (!product) {
      console.log('Product not found');
      return res.status(404).json({ message: 'Product not found' });
    }

    // Agregar el producto consumido al día
    const eatenProduct = {
      title: product.title,
      weight: product.weight,
      kcal: product.kcal,
      id: product._id,
    };

    day.eatenProducts.push(eatenProduct);

    // Guardar el día actualizado en la base de datos
    await day.save();

    // Crear un resumen del día
    const daySummary = new DaySummary({
      date: day.date,
      kcalLeft: day.kcalLeft,
      kcalConsumed: day.kcalConsumed,
      dailyRate: day.dailyRate,
      percentsOfDailyRate: day.percentsOfDailyRate,
      userId: 'userIdPlaceholder', // Reemplaza con la lógica adecuada para obtener el userId
    });

    await daySummary.save();

    // Asociar el resumen del día al día consumido
    day.daySummary = daySummary._id;
    await day.save();

    // Respuesta con el formato esperado
    const response = {
      eatenProduct,
      day: {
        id: day._id,
        date: day.date,
        eatenProducts: day.eatenProducts.map(product => ({
          title: product.title,
          weight: product.weight,
          kcal: product.kcal,
          id: product.id,
        })),
        daySummary: {
          date: day.date,
          kcalLeft: day.kcalLeft,
          kcalConsumed: day.kcalConsumed,
          dailyRate: day.dailyRate,
          percentsOfDailyRate: day.percentsOfDailyRate,
          userId: daySummary.userId,
          id: daySummary._id,
        },
      },
    };

    console.log('Response:', response);

    res.status(201).json(response);
  } catch (error) {
    console.error('Error:', error);
    next(error);
  }
};

module.exports = {
  addProductToDay,
};
