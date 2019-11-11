const express = require('express')
const app = express()
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const PORT = process.env.PORT || 3000;
// CONTROLLERS
const session = require('express-session')

const recordsController = require('./controllers/music.js');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/records'
// DB SETUP
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});
// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(
    session({
        secret: 'shaun', //some random string
        resave: false,
        saveUninitialized: false
    })
)
//CONTROLLERS middleware
app.use('/music', recordsController)

// redirect
app.use('/', (req, res) => {
    res.redirect('/music');
})
//
//
app.listen(PORT, (req, res) => console.log('listening on PORT 3000!'))
