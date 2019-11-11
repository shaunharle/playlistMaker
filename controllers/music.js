const express = require('express');
const router = express.Router();
const Records = require('../models/music')

const bcrypt = require('bcrypt');
router.get('/new', (req, res) => {
    res.render('new.ejs');
});
router.post('/', (req, res) => {
    Records.create(req.body, () => {
        res.redirect('/music');
    });
});
router.get('/', (req, res) => {
    Records.find({}, (error, allRecords) => {
        res.render('index.ejs', {
            Records: allRecords,
        });
    });
});
router.get('/:id', (req, res) => {
    Records.findById(req.params.id, (err, foundRecords) => {
        res.render('show.ejs', {
            Records: foundRecords,
        });
    });
});
router.get('/:id/edit', (req, res) => {
    Records.findById(req.params.id, (err, foundRecords) => { //find the 
        res.render(
            'edit.ejs',
            {
                Records: foundRecords //pass in found 
            }
        );
    });
});
router.put('/:id', (req, res) => {
    //{new: true} tells mongoose to send the updated model into the callback
    Records.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/music');
    });
});
//
// DELETE
router.delete('/:id', (req, res) => {
    // add delete logic using mongoose
    Records.findByIdAndRemove(req.params.id, (err, deleteRecords) => {
        if (err) {
            console.log(err)
        } else {
            //redirect back to  index
            res.redirect('/music');
        }
    });
});
module.exports = router;