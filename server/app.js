// dependencies
const express = require('express')
const api = require('./api')
const morgan = require('morgan') //logger
const bodyParser = require('body-parser')
const cors = require('cors')

// Creating express app
const app = express()

// Setting up PORT
app.set('port', (process.env.PORT || 8081))

//   configuring middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/api', api)
app.use(express.static('static'))

app.use(morgan('dev'))

// this function set up a reusable error if user goes to wrong route
app.use(function (req, res){
    const err = new Error('Not Found')
    err.status = 404
    res.json(err)
})

app.listen(app.get('port'), function () {
	console.log(`==> 🌎  Listening on port: ${app.get('port')}!`)
})

