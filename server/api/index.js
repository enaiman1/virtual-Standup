/*This file is to help Organize all the various route*/

// dependecies
const express = require('express')
const router = express.Router()

/* 
Bringin all route to be utilize
we pass in express router to each route as an argument
*/
require('./routes/standup')(router)
require('./routes/project')(router)
require('./routes/team')(router)

module.exports = router
