const jwt = require('jsonwebtoken')
function userAuthentication(req, res, next) {
  //var cookie = Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null

  //if (cookie) {
    try {
      //var token = cookie[process.env.COOKIE_SECRET]
      var token = req.headers.authorization.split(' ')[1]; //---> if not cookie based
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      const { username, role } = decoded
      req.username = username
      req.role = role
      next()
    }
    catch (err) {
      console.log(err)
      res.status(401).json({ message: 'Authentication failed' })
    }
  //}
  // else {
  //   res.status(401).json({ message: 'Authentication failed' })
  // }
}

module.exports = { userAuthentication }