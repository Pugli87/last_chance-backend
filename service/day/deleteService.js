const { Day } = require('../../models');

/**
 * Elimina un producto consumido de un día específico.
 * @param {string} dayId - ID del día.
 * @param {string} eatenProductId - ID del producto consumido.
 * @returns {Promise<Object>} - Objeto con información sobre la eliminación.
 */
const deleteProductService = async (dayId, eatenProductId) => {
  try {
    // Buscar el día correspondiente por su ID
    const day = await Day.findById(dayId);

    if (!day) {
      return { success: false, message: 'Day not found' };
    }

    // Filtrar los productos consumidos, excluyendo el que se va a eliminar
    day.eatenProducts = day.eatenProducts.filter(
      product => product.id !== eatenProductId,
    );

    // Guardar el día actualizado en la base de datos
    await day.save();

    return { success: true, message: 'Product deleted successfully' };
  } catch (error) {
    console.error('Error in deleteProductService:', error);
    return { success: false, message: 'Error deleting product' };
  }
};

module.exports = {
  deleteProductService,
};
