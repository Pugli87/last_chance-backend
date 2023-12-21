const mongoose = require('mongoose');
const { Day, DaySummary } = require('../../models');

const deleteProductFromDay = async (req, res, next) => {
  try {
    const { dayId, eatenProductId } = req.query;

    if (!mongoose.Types.ObjectId.isValid(dayId)) {
      return res.status(404).json({ message: 'Invalid day ID' });
    }

    const day = await Day.findById(dayId);

    if (!day) {
      return res.status(404).json({ message: 'Day not found' });
    }

    day.eatenProducts = day.eatenProducts.filter(
      product => product.id !== eatenProductId,
    );

    await day.save();

    // Resto del código para calcular el resumen del día...

    const daySummary = new DaySummary({
      date: day.date,
      kcalLeft: day.kcalLeft,
      kcalConsumed: day.kcalConsumed,
      dailyRate: day.dailyRate,
      percentsOfDailyRate: day.percentsOfDailyRate,
      userId: 'userIdPlaceholder', // Reemplaza con la lógica adecuada para obtener el userId
    });

    await daySummary.save();

    day.daySummary = daySummary._id;
    await day.save();

    const response = {
      message: 'Product deleted successfully',
      daySummary: {
        date: daySummary.date,
        kcalLeft: daySummary.kcalLeft,
        kcalConsumed: daySummary.kcalConsumed,
        dailyRate: daySummary.dailyRate,
        percentsOfDailyRate: daySummary.percentsOfDailyRate,
        userId: daySummary.userId,
        id: daySummary._id,
      },
    };

    res.json(response);
  } catch (error) {
    console.error('Error in deleteProductFromDay:', error);
    next(error);
  }
};

module.exports = {
  deleteProductFromDay,
};
