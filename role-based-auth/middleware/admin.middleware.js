const adminMiddleware = async(req, res, next)=> {
  if(req.userInfo.role !== 'admin') {
    res.json({
      success: false,
      msg: 'access denied!'
    })

  }
  next();
}

module.exports = adminMiddleware