const express = require('express')
const app = express()
const port = 5000

// Middleware
app.use(express.json())
app.use(require('cors')())

// Routes
app.get('/api/stock', (req, res) => {

})

app.post('/test', (req, res) => {

})

app.listen(port, () => console.log(`Server has started on port: ${port}`))