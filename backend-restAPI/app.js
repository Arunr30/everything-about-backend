const express = require('express')
const app = express();

app.use(express.json())

let books = [
    {
        id:"1",
        title: "book-1"
    },
    {
        id: "2",
        title: "book-2"
    },
]

app.get('/', (req, res) => {
    res.send('welcome to book store api')
})

app.get('/get', (req, res) => {
    res.json(books)
})

app.get('/get/:id', (req, res) => {
    const book = books.find((item) => item.id === req.params.id)
    
    if(book) {
        res.status(200).send(book)
    } else {
        res.status(404).json({
            message: "book not found!"
        })
    }
})


app.post('/add', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: `book - ${books.length + 1}`
    }
    books.push(newBook)
    if(newBook) {
        res.json({
            data: newBook,
            message: 'book added succesfully'
        })
    }
})


app.put('/book/:id', (req, res) => {
    const updateBook = books.find(book => book.id === req.params.id)
    if(updateBook) {
        updateBook.title = req.body.title || updateBook.title
        res.json({
            data : updateBook,
            message : `book ${req.params.id} updated successfully`
        })
    } else {
        res.json({
            message : 'incorrect id'
        })
    }
})


app.delete('/delete/:id', (req, res) => {
    const deleteBook = books.findIndex(book => book.id === req.params.id)
    if(deleteBook.length != -1) {
        const deleted = books.splice(deleteBook, 1)
        res.status(200).json({
            message: "book deleted successfully",
            data: deleted
        })
    } else {
        res.status(404).send('could not delete')
    } 
})




const PORT = 3000

app.listen(PORT, () => {
    console.log(`server is connected ${PORT}`)
})