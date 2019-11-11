//___________________
//Dependencies
//___________________
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//___________________
//Set up Schema
//___________________
const recordSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    albumTitle: { type: String, required: true },
    description: String,
    img: String,
    price: {
        type: Number,
        min: [0, 'Price can\'t be less than 0. This ain\'t no charity!']
    },
    qty: {
        type: Number,
        min: [0, 'Quantity can\'t be less than 0. No capatalist joyrides here!']
    }
});

//___________________
//Set up Model
//___________________
const Records = mongoose.model('Records', recordSchema);

//___________________
////Module Exports - access Records in controllers/music.js
//___________________
module.exports = Records;




