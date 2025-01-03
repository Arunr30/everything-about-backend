const express = require('express');
const adminMiddleware = require('../middleware/admin.middleware');
const authMiddleware = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/admin', authMiddleware,adminMiddleware, async(req, res) => {
  res.json({
    success: false,
    msg: 'welcome to the admin page'
  })
})

module.exports = router