var express = require('express')
var bodyParser = require('body-parser')
const path = require("path")
require("dotenv").config()
var mongoose = require('mongoose')
var routes = require("./routes")
var app = express()
var PORT = process.env.PORT || 5000

//Body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "client", "build")))
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   next()
// })

app.use(routes)


//Mongoose Connection
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/jsp")
// mongoose.connect("mongodb://127.0.0.1//mern-crud")
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to mongodb://localhost/jsp')
})
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err)
})

app.listen(PORT, function() {
  console.log('Listening on port: ' + PORT)
})
