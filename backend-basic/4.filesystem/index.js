const fs = require('fs')
const path = require('path')


fs.readFile("a.txt", "utf-8", (err, data) => {
    if(err) {
        console.log(err.message)
    } else {
        console.log(data)
    }
})


const dataFolder = path.join(__dirname, "data");

if(!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder)
    console.log("created")
}

const filePath = path.join(dataFolder, "example.txt")

fs.writeFileSync(filePath, "helloo hii")
console.log("file created successfully!")


