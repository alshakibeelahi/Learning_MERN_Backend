const createError = require('http-errors')

function notFoundHandler(req, res, next){
  next(createError(404,'Your requested content not found'))
}

function errorHandler(err, req, res, next){
  res.json(err.message)
}
module.exports = {notFoundHandler, errorHandler}