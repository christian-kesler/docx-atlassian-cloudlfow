// importing utils
var fs = require('fs')

// importing and initializing express app
var express = require('express')
var app = express()

// importing and initializing routes
var routes = require('./controllers/routes.js')
routes(express, app)

// starting server
app.listen(3000)