const express = require('express')
const { getStockPrices, getHome, postTest } = require('./routes')
const app = express()
const port = 5000

// Middleware
app.use(express.json())
app.use(require('cors')())

// Routes
app.get('/', getHome)

app.get('/api/stock', getStockPrices)

app.post('/api/test', postTest)

app.listen(port, () => console.log(`Server has started on port: ${port}`))