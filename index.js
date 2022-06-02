const app = require("express")()
const bodyParser = require("body-parser")
const cors = require("cors")
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())

app.use((req, res, next) => {
  const { keysec } = req.headers
  if (keysec !== process.env.APP_KEY) {
    res.status(403).json({status: false, message: 'invalid secret key'})
  } else {
    next()
  }
})

app.use("/", require("./routes"))
app.listen(process.env.APP_PORT)
