const initializeApp = require("./app")

const app = initializeApp()
app.listen(3000, () => {
    console.log("Ready")
})
