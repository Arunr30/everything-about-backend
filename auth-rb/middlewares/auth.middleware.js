const jwt = require('jsonwebtoken')
const authMiddleware = async(req, res, next) => {
  console.log('auth middleware is called')
  // taking a token and putting in bearer token
  const authToken = req.headers['authorization']
  console.log(authToken)
  const token = authToken && authToken.split(' ')[1];
  if(!token) {
    res.json({
      success: false,
      message: 'Invalid token'
    })
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decodedToken);
    req.userInfo = decodedToken
    next();
  } catch (error) {
    res.json({
      success: false,
      message: 'Invalid token'
    })
  }

}

module.exports = authMiddleware