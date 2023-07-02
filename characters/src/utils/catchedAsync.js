// Funcion de orden superior para capturar errores en funciones asincronas

module.exports = (fn) => (req, res, next) =>
  fn(req, res).catch((err) => next(err));

// module.exports = (fn) => {
//   return function (req, res, next) {
//     fn(req, res).catch((err) => {
//       next(err);
//     });
//   };
// };
