const express = require('express');
const connecttoMongo = require('./db');
const port = 5000
const app = express()

app.use(express.json())

connecttoMongo();


app.listen(port, () => {
    console.log(`Food app listening on http://localhost:${port}`)
})
