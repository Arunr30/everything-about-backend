const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();


router.get('/welcome', authMiddleware, async (req, res) => {
  const {username, userId, email} = req.userInfo

  res.json({
    username: username,
    userid: userId,
    email: email
  })
})

module.exports = router