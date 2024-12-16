const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// register controller

const registerUser = async(req, res) => {
  try {
    // extract user information from body
    const {userName, email, password, role} = req.body    
    // check if the user is already in our database,
    const checkExistingUser = await User.findOne({$or: [{userName, email, password}]})
    if(checkExistingUser) {
      return res.status(400).json({
        success: false,
        message: 'user already exist with same username and email'
      });
    }
    // hash user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
      role: role || 'user'
    })

    await newUser.save()

    if(newUser) {
      res.status(201).json({
        success: true,
        message: 'user registered successfully'
      })
    } else {
      res.status(404).json({
        success: false,
        message: 'unable to register user'
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'some error occured'
    })
    
  }
}

const loginUser = async(req, res) => {
  try {
    const {userName, password} = req.body;

    const user = await User.findOne({userName})
    if(!user) {
      res.staus(400).json({
        success: false,
        message: 'user doesnt exist'
      })
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if(!isPasswordMatch) {
      res.staus(400).json({
        success: false,
        message: 'Invalid credentials'
      })
    }
    // create web token
    const accessToken = jwt.sign({
      userId: user._id,
      username: user.userName,
      role: user.role
    }, process.env.SECRET_KEY, {
      expiresIn: "7d"
    })

    res.status(200).json({
      success: true,
      message: 'logged in',
      accessToken
    })


  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'some error occured'
    })
    
  }
}

module.exports = {
  registerUser,
  loginUser
}