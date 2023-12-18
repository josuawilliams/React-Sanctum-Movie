"use strict";
if (process.env.NODE_ENV !== 'production') {
  require("dotenv").config()
}
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const Route = require("./route/index")
const errorHandle = require("./middleware/HandleError")

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(Route)
app.use(errorHandle)


app.get("/", (req, res) => {
  res.status(200).json({
    message: "Response Success"
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})