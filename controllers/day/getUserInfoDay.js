// pendiente por revisar
const { Days } = require('../../models/days');

const createError = require('http-errors');

const getUserInfoPerDay = async (req, res) => {
  // Extrae el parámetro 'day' de los parámetros de la URL y el '_id' del usuario de la solicitud
  const { day: dateString } = req.params;
  const { _id: userId } = req.user;

  // Divide la cadena de fecha en año, mes y día
  const [year, month, day] = dateString.split('-');

  // Realiza algunas validaciones básicas sobre el formato de la fecha
  if (
    !year ||
    !month ||
    !day ||
    year.length < 4 ||
    month.length > 2 ||
    day.length > 2
  ) {
    throw createError(400, 'Bad request (the wrong date format)');
  }

  // Convierte la cadena de fecha en un objeto Date y verifica si es válida
  const dateRequested = new Date(dateString);
  if (dateRequested.toDateString() === 'Invalid Date') {
    throw createError(400, 'Bad request (the wrong date format)');
  }

  // Busca un documento 'Day' en la base de datos para el usuario y la fecha especificada
  const searchForDay = await Days.findOne({
    $and: [{ user_id: userId }, { date: dateString }],
  });

  // Si no se encuentra un documento para el día específico, devuelve un error 404
  if (!searchForDay) {
    throw createError(404, `No data for ${dateString}`);
  }

  // Devuelve una respuesta JSON con el resumen del día
  res.status(200).json({
    status: 'success',
    code: 200,
    data: { summary: searchForDay },
  });
};

module.exports = getUserInfoPerDay;
