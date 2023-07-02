//Funcion de orden superior

module.exports = (fn) => (req,res,next) => 
  fn(req,res).catch((err) => next(err));
