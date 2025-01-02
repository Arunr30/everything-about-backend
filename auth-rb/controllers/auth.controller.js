// register controller


const registerController = async(req, res) => {
  try {
    const {username,email,password, role} = req.body
    
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