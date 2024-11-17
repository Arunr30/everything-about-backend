const mongoose = require('mongoose')
mongoose.connect(
    "mongodb+srv://arunvasur:WGgxms36fZSYRbzt@cluster0.cqc6n.mongodb.net/"
)
.then(() => console.log('database connected sucessfully'))
.catch((e) => console.log(e))


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive : Boolean,
    tags: [String],
    createdAt : {type: Date, default: Date.now}

})

const User = mongoose.model('User', userSchema)  

async function queryExample() {
    try {
        // const newUser = await User.create({
        //     name: 'Arunvasu',
        //     email: 'Arunvasu@gmail.com',
        //     age: 22,
        //     isActive : true,
        //     tags: ['sde', 'swe'],
        // })
        // console.log('new user created', newUser)

        // const user2 = await User.create({
        //     name: ' JhonDoe',
        //     email: 'JhonDoe@gmail.com',
        //     age: 22,
        //     isActive : true,
        //     tags: ['sde', 'swe'],
        // })
        // console.log('new user created', user2)

        const user3 = await User.create({
            name: ' Doe',
            email: 'Doe@gmail.com',
            age: 22,
            isActive : false,
            tags: ['sde', 'swe'],
        })
        // console.log('new user created', user3)
        // const findUser = await User.find({isActive: false})
        // console.log("active user finded", findUser)

        // const findLastCreatedUser = await User.findById(user3._id)
        // console.log("findLastCreatedUser ->", findLastCreatedUser)

        // const selectedFile = await User.find().select("name email -_id")
        // console.log(selectedFile)

        const countDocuments = await User.countDocuments({isActive: true})
        console.log(countDocuments)

        const deleteUser = User.findByIdAndDelete(user3._id)
        console.log(deleteUser)
    } catch(e) {
        console.log('error', e)
    } finally {
        mongoose.connection.close()
    }
}

queryExample()