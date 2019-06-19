const express = require('express')
const serveStatic = require('serve-static')
const staticFilePath = 'static'
const staticServe = serveStatic(staticFilePath)

function from(fromUrl) {
    return {
        to(toUrl) {
            return {
                from: fromUrl,
                to: toUrl
            }
        }
    }
}

// 下にあるもの優先
const config = [
    from("/").to("/html/index.html"),
    from("/users").to("/html/users.html"),
    from("/users/:id").to("html/users/_id.html"),
]

function createRouter() {
    const router = express.Router()
    config.forEach(({from, to}) => {
        router.get(from, (req, _, next) => {
            req.url = to
            next()
        })
    })
    router.use(staticServe)
    return router
}

module.exports = createRouter()