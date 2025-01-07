const adminMiddleware = async(req, res, next)=> {
  if(req.userInfo.role !== 'admin') {
    return res.json({
      success: false,
      msg: 'access denied! admin rights requuired!!'
    })

  }
  next();
}

module.exports = adminMiddleware