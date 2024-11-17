const express = require('express');
const app = express();

const middleware = (req, res, next) => {
    const a = Number(req.query.a); // Convert to number
    const b = Number(req.query.b); // Convert to number
    const result = a + b;

    if (!isNaN(result)) { // Check if the result is a valid number
        req.result = result; // Pass result to the next middleware
        next();
    } else {
        res.send('failed');
    }
};


app.get('/', middleware,(req, res) => {
    res.send(`The result is: ${req.result}`);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
