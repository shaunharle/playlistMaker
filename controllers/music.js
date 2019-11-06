// DEPENDENCIES
const express = require('express')
const music = express.Router()

//MODELS
const Music = require('../models/music')

music.get('/json', (req, res) => {
    Music.find((err, music) => {
        res.send(music)
    })
})

// INDEX : GET      '/music/
music.get('/', (req, res) => {
    Music.find({}, (err, music) => {
        if (err) { console.log(err) }
        res.render('index.ejs', { music })
    })
})
// NEW : GET        '/music/new'
music.get('/new', (req, res) => {
    res.render('new.ejs')
})
//SHOW : GET        '/music/:id'
music.get('/:id', (req, res) => {
    Music.findById(req.params.id, (err, music) => {
        if (err) { console.log(err) }
        res.render('show.ejs', { music })
    })
})
// CREATE : POST        '/music'
music.post('/', (req, res) => {
    Music.create(req.body, (err, music) => {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/music/' + music.id)
        }
    })
})
//EDIT : GET        '/music/:id/edit'
music.get('/:id/edit', (req, res) => {
    Music.findById(req.params.id, (err, music) => {
        if (err) { console.log(err) }
        res.render('edit.ejs', { music })
    })
})
//UPDATE : PUT      '/music/:id'
music.put('/:id', (req, res) => {
    Music.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, music) => {
        if (err) { console.log(err) }
        res.redirect('/music/' + music.id)
    })
})
//DELETE : DELETE       '/products/:id"
music.delete('/:id', (req, res) => {
    Music.findByIdAndRemove(req.params.id, (err, product) => {
        if (err) {
            console.log(err)
            res.redirect('/music')
        }
    })
})
// SEED ROUTE - INSERT HERE

// DROP DATABASE - INSERT HERE

// MODULE EXPORTS
module.exports = music