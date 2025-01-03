const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router();

router.get('/welcome', authMiddleware,(req, res) => {
  const {username, userId, role} = req.userInfo;
   
  res.json({
    msg: "welcome to home page!",
    user: {
      id: userId,
      username: username,
      role: role
    }
  })
})

module.exports = router

