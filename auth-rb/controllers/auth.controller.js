const User = require('../model/schema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


// register controller
const registerController = async(req, res) => {
  try {
    // extracting the details from the user
    const {username,email,password, role} = req.body
    // checking the existing the user
    const checkExistingUser = await User.findOne({
      $or: [{username}, {email}]})
      if(checkExistingUser) {
        return res.json({
          success: false,
          message: 'User is already exist'
        })
      }
      const salt = await bcrypt.genSalt(10)
      const hashPassword = await bcrypt.hash(password, salt)
      const createUser = await User.create({
        username,
        email,
        password: hashPassword,
        role: role || 'user' 
      })
      await createUser.save();
      if(createUser){
        res.json({
          success: true,
          message: 'new user created successfully'
        })
      } else {
        res.json({
          message: 'unable to create a user'
        })
      } 
  } catch (error) {
    console.log('there is an error')
    res.status(400).json({
      success: false,
      message: 'some error while registor'
    })
  }
}


// login controller
const loginController = async(req, res) => {
  try {
    const {username,password} = req.body
    const currentUser = await User.findOne({username})
    if(!currentUser) {
      res.json({
        success: false,
        message: 'Invalid Username'
      })
    }

    // compare the password.., dont overthing that currentUser.password came from above, 
    // actually that currentUser can power to fetch the db datas
    const isPasswordMatch = await bcrypt.compare(password, currentUser.password)
    if(!isPasswordMatch) {
      res.json({
        success: false,
        message: "Invalid crententails"
      })
    }
    const token = await jwt.sign({
      userId: currentUser._id,
      username: currentUser.username,
      role: currentUser.role
    }, process.env.JWT_SECRET, {
      expiresIn: '20m'
    })
    res.status(200).json({
      success: true,
      message: 'Login successfull',
      token
    })
    
  } catch (error) {
    console.log('there is an error')
    res.status(400).json({
      success: false,
      message: 'some error while registor'
    })
  }
}

module.exports = {
  registerController,
  loginController
}