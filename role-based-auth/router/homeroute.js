const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();


router.get('/welcome', authMiddleware, async (req, res) => {
  const {username, userId, email, role} = req.userInfo

  res.json({
    message: "welcome to home page",
    user: {
      username: username,
      userid: userId,
      email: email,
      role: role
    }
   
  })
})

module.exports = router