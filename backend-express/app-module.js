// routes example..

const express = require('express')

const app = express();


app.get('/', (req, res) => {
    res.send('welcome to our home page')
})

// get routes...
app.get('/product', (req, res) => {
    const products = [
        {
            id: 1,
            label: 'prduct-1'
        },
        {
            id: 2,
            label: 'prduct-2'
        },
        {
            id: 3,
            label: 'prduct-3'
        },
    ]
    res.json(products)

})

// dynamic routing...
// :id is must!
app.get('/product/:id', (req, res) => {
    const productId = parseInt(req.params.id)
    console.log(req.params.id)
    const products = [
        {
            id: 1,
            label: 'prduct-1'
        },
        {
            id: 2,
            label: 'prduct-2'
        },
        {
            id: 3,
            label: 'prduct-3'
        },
    ]

    const singleProduct = products.find((product) => product.id === productId)
    if(singleProduct) {
        res.json(singleProduct)
    } else {
        res.status(404).send('could not found')
    }
})

const port = 3000
app.listen(port, () => {
    console.log(`listening to ${port}`);
    
})
