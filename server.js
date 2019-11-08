
// DEPENDENCIES
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const app = express()
// PORT
const PORT = process.env.PORT || 3000;
// DATABASE
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/records'
// CONNECT TO DATABASE
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('telegram for mongo');
});
// SET CONNECTION TO CONST VAR
const db = mongoose.connection
// DON'T KNOW WHAT THIS IS. ERROR MESSAGE STUFF OR SOMETHING
// FOUND IT IN MONDAY'S MORNING EXERCISE
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
    console.log('DB: Connected');
});
// CONTROLLERS
// const Music = require('./models/music.js')
const musicController = require('./controllers/music.js');
// MIDDLEWARE
app.use(express.static('public'))
// app.use(express.static(__dirname+'public'))
// this will ensure correct linking to the public folder no matter what
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/music', musicController)


// GET
app.get('/', (req, res) => {
    res.redirect('/music')
    console.log('app is running')
})


app.listen(PORT, () => console.log('ALLOW US TO COLLECT DATA FOR TARGETED ADS. '))

