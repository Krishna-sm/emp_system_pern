require("dotenv").config({
    path:'.env'
})
const app = require("./src/app")
const port = process.env.PORT || 5000


app.listen(port, () => {
    console.log(`emp app listening on http://localhost:${port}`)
  })