const User = require('../models/Schema')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// login controller
const register = async(req, res) => {
  const {username, password, email, role} = req.body;
  // check existing user
  const checkExistingUser = await User.findOne({$or: [{username}, {email}]})
  if(checkExistingUser) {
    res.json({
      success: false,
      msg: 'user already exist'
    })
  }
  // hash the password

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt)
  // create new user

  const createNewUser = await User.create({
    username,
    password: hashPassword,
    email,
    role: role || 'user'
  })
  await createNewUser.save();
  if(createNewUser) {
    res.json({
      success: true,
      msg: 'new user created successfully!!!'
    })
  }
}

const login = async(req, res) => {
  const {username, password} = req.body;
  const user = await User.findOne({username})
  if(!user) {
    res.json({
      success: false,
      message: "invalid username"
    })
  }
  // is password match
  const isPasswordMatch = await bcrypt.compare(password, user.password)
  if(!isPasswordMatch) {
    res.json({
      success: false,
      msg: "invalid credentials"
    })
  }
  // generate the token

  const token = await jwt.sign({
    userId: user._id,
    email: user.email,
    username: user.username,
    password: user.password,
    role: user.role
  }, process.env.SECRET_KEY,{
    expiresIn: '20m'
  });
  if(token) {
    res.json({
      success: true,
      msg: 'token generated successfully',token
    })
  }

}

module.exports = {
  register,
  login
}