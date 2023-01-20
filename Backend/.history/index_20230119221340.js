const express = require('express');
const connecttoMongo = require('./db');
const port = 5000
const app = express()

app.use(express.json())

// auths
app.use('/notes',require('./routes/Notes'))

connecttoMongo();

app.listen(port, () => {
    console.log(`Notes App listening on http://localhost:${port}`)
})
