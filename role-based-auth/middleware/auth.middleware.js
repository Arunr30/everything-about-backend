const jwt = require('jsonwebtoken')


const authMiddleware = async(req, res, next) => {
  const authToken = req.headers['authorization']
  console.log(authToken)
  const token = authToken && authToken.split(' ')[1];
  if(!token) {
    res.json({
      success: false,
      msg: 'invalid credentails'
    })
  }

  try {
    const decodedToken = await jwt.verify(token, process.env.SECRET_KEY)
    req.userInfo = decodedToken
    next()
    console.log(decodedToken)
  } catch (error) {
    res.json({
      success: false,
      msg: 'invalid credentails'
    })
  }
  console.log('auth middleware called')
}
module.exports = authMiddleware