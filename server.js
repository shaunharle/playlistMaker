// DEPENDENCIES
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
//PORT
const PORT = process.env.PORT || 3000
// DATABASE
mongoURI = process.env.MONGOURI || 'mongodb://localhost/playlistMaker'
// CONNECT TO DATABASE
mongoose.connect(mongoURI)
// SET CONNECTION TO CONST VAR
const db = mongoose.connection
// ERROR MESSAGE HANDLING
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
    console.log('DB: Connected')
})
// CONTROLLERS
const musicController = require('./controllers/music.js')
// MIDDLEWARE
app.use(express.static(__dirname + 'public'))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/music', musicController)

mongoose.connection.once('open', () => {
    console.log('telegram for mongo')
})

// GET 
app.get('/', (req, res) => {
    res.redirect('/music')
    console.log('app is running')
})

// LISTEN
app.listen(PORT, () => console.log('ALLOW US TO COLLECT DATE FOR TARGETED ADS'))