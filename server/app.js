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


//Mongo DB connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/virtualstandups', {useNewUrlParser: true})

const db= mongoose.connection
// lets us know if we have any connection issues
db.on('error', console.error.bind(console, 'connection error:'))

/* this will let us know we are connected to Mongo Db and then 
have express listen for the request on the configured port
*/
db.once('open', function(){
    console.log('Connected to MongoDB')

    app.listen(app.get('port'), function () {
        console.log(`==> 🌎  Listening on port: ${app.get('port')}!`)
    })
})

