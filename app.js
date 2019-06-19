const compression = require('compression')
const express = require('express')
const morgan = require('morgan')
const routeConfig = require("./routing-config")

const logFormat = ':method :url :status :res[content-length] - :response-time ms'

module.exports = function initializeApp() {
    const app = express()
    app.use(compression())
    app.use(morgan(logFormat))
    app.use(routeConfig)
    app.use(function (err, req, res, next) {
        console.error(err)
        res.status(500).send('Something broke!')
    })
    return app
}