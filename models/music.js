const mongoose = require('mongoose')
const Schema = mongoose.Schema

const musicSchema = Schema({
    bandname: {
        type: String,
        required: true
    },
    albumName: { type: String, required: true },
    trackName: [String]
})

const Music = mongoose.model('Music', musicSchema)

module.exports = Music