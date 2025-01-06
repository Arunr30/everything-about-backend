const adminMiddleware = async(req, res, next)=> {
  if(req.user.role !== 'admin') {
    res.json({
      success: false,
      msg: 'access denied!'
    })

  }
  next();
}

module.exports = adminMiddleware