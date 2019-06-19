const initializeApp = require("../app")
const port = process.env.port || 3000
const express = require('express')

const app = express()
initializeApp(app)
app.listen(port, () => {
    console.log(`Application Start Port: ${port}`)
})
