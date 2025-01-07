const Image = require('../models/image')
const {uploadToCloudinary } = require('../helpers/cloudinary.helper')

const uploadImage = async(req, res) => {
  try {
    // check if  the file is missing in req object

    if(!req.file) {
      return res.status(400).json({
        success: false,
        message: 'File is missing!'
      })
    }
    const {url, publicId} = await uploadToCloudinary(req.file.path)

    // store the image url and uploaded image

    const newlyCreatedImage = await new Image({
      url,
      publicId, 
      uploadedBy: req.userInfo.userId
    })

    await newlyCreatedImage.save()

    res.status(201).json({
      success: true,
      message: "Image created Successfully"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong'
    })
  }
}

module.exports = {
  uploadImage
}