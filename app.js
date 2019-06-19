const compression = require('compression')
const morgan = require('morgan')
const routeConfig = require("./routing_config")
const logFormat = ':method :url :status :res[content-length] - :response-time ms'

module.exports = function initializeApp(app) {
    app.use(compression())
    app.use(morgan(logFormat))
    app.use(routeConfig)
    app.use((err, _, res, __) => {
        console.error(err)
        res.status(500).send('Internal Server Error')
    })
}