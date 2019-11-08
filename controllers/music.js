//___________________
//Dependencies
//___________________
//require express so we can use router
const express = require('express');
const music = express.Router();

//___________________
//Models
//___________________
//get access to the Music model
const Records = require('../models/music');

//___________________
//See json Route
//___________________
music.get('/json', (req, res) => {
    Records.find((err, records) => {
        res.send(records);
    });
});

//___________________
//7 Restful Routes
//___________________
// Index  : GET    '/products'          1/7
// Show   : GET    '/products/:id'      2/7
// New    : GET    '/prodcuts/new'      3/7
// Create : POST   '/products'          4/7
// Edit   : GET    '/products/:id/edit' 5/7
// Update : PUT    '/products/:id'      6/7
// Delete : DELETE '/products/:id'      7/7


// Index  : GET    '/music'          1/7
music.get('/', (req, res) => {
    Records.find({}, (err, music) => {
        if (err) { console.log(err); }
        res.render('index.ejs', { music });
    });
});

// New    : GET    '/music/new'      3/7
// Order matters! must be above /prodcuts/:id or else this route will never get hit
music.get('/new', (req, res) => {
    res.render('new.ejs');
});

// Show   : GET    '/music/:id'      2/7
music.get('/:id', (req, res) => {
    Records.findById(req.params.id, (err, record) => {
        if (err) { console.log(err); }
        res.render('show.ejs', { record: record });
    });
});

// Create : POST   '/music'          4/7
music.post('/', (req, res) => {
    Records.create(req.body, (err, record) => {
        if (err) { res.send(err); } else {
            res.redirect('/music/' + music.id);
        }
    });
});

// Edit   : GET    '/music/:id/edit' 5/7
music.get('/:id/edit', (req, res) => {
    Records.findById(req.params.id, (err, record) => {
        if (err) { console.log(err); }
        res.render('edit.ejs', { record: record }
        );
    });
});

// Update : PUT    '/music/:id'      6/7
music.put('/:id', (req, res) => {
    Records.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, record) => {
        if (err) { console.log(err); }
        res.redirect('/music/' + music.id);
    });
});

// Delete : DELETE '/music/:id'      7/7
music.delete('/:id', (req, res) => {
    Records.findByIdAndRemove(req.params.id, (err, record) => {
        if (err) { console.log(err); }
        res.redirect('/music');
    });
});

//___________________
//Buy Route
//___________________

music.put('/:id/buy', (req, res) => {
    Records.findByIdAndUpdate(req.params.id, { $inc: { qty: -1 } }, (err, record) => {
        if (err) { console.log(err); }
        res.redirect('back');
    });
});



//___________________
//Seed Route - Vist ONCE to populate database
//___________________
music.get('/seed/newrecord', (req, res) => {

    const newRecords = [
        {
            _id: "58e913abb7304c0e0f20d0d8",
            name: "Beans",
            description: "A small pile of beans. Buy more beans for a big pile of beans.",
            img: "http://www.rodalesorganiclife.com/sites/rodalesorganiclife.com/files/styles/slideshow-desktop/public/navybeans_peangdao_1100.jpg?itok=QB7fl971",
            price: 5,
            qty: 99,
            __v: 0
        },
        {
            _id: "58e913abb7304c0e0f20d0da",
            name: "Beautiful Bins",
            description: "A stack of colorful bins for your beans and bones.",
            img: "http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg",
            price: 7000,
            qty: 1,
            __v: 0
        },
        {
            _id: "58e913abb7304c0e0f20d0d9",
            name: "Bones",
            description: "It's just a bag of bones.",
            img: "http://bluelips.com/prod_images_large/bones1.jpg",
            price: 25,
            qty: 0,
            __v: 0
        },
        {
            _id: "58e9452e28ccf4146d4c485e",
            name: "Water Rose",
            img: "http://wallpaper-gallery.net/images/water-wallpaper-hd/water-wallpaper-hd-22.jpg",
            description: "Beautiful, ephemeral, assembly required",
            qty: 5,
            __v: 0,
            price: 1000000
        },
        {
            _id: "58e94d443931ca152bdd4478",
            name: "All Natural Organic Non-GM0 Pure 100% Natural Lime",
            img: "http://wallpaper-gallery.net/images/images/images-17.jpg",
            description: "Forget your fears of agricultural genetic engineering and take your taste buds back to the beginning of time with this authentic unaltered fruit",
            price: 17,
            qty: 72,
            __v: 0
        },
        {
            _id: "58e956e73931ca152bdd4479",
            name: "Mantis Shrimp (tamed)",
            img: "http://otlibrary.com/wp-content/gallery/mantis-shrimp/mantis-shrimp.jpg",
            description: "Sustainably raised, cage-free, docile mantis shrimp. Makes a for a cuddly companion as long as you never make direct eye contact! Notice: this item is gluten-free, should your relationship go south",
            price: 887,
            qty: 0,
            __v: 0
        },
        {
            _id: "58e958243931ca152bdd447a",
            name: "Kohlrabi",
            img: "http://canelasf.com/wp-content/uploads/2015/02/kohlrabi.jpg",
            description: "Get a jump on the next superfood craze. Kohlrabi's superiority is marked by its tricky to spell name. Text all your friends: You are going to live forever with the power of kholrabi",
            price: 6,
            qty: 913462,
            __v: 0
        },
        {
            _id: "58e9893444738817298b3a3b",
            name: "Yogalates Fitness Machine 1000",
            img: "https://s-media-cache-ak0.pinimg.com/564x/a8/4f/05/a84f051bf47e41382e4becd4a3d05214.jpg",
            description: "Stop wasting your time doing one exercise at a time! With the YFM1000 you can do yoga and pilates at the same time! ",
            price: 3199,
            qty: 14,
            __v: 0
        },
        {
            _id: "58eba62854241b05b274dc78",
            name: "Bell Jars",
            img: "https://s-media-cache-ak0.pinimg.com/736x/0a/6f/b6/0a6fb62caa11cfdb68c7c12a2620c012.jpg",
            description: "Capture the beauty of anything and don't let it get away! Formaldehyde sold separatey ",
            price: 49.99,
            qty: 49,
            __v: 0
        },
        {
            _id: "58ed05dfa2b6901441a43419",
            name: "Portal to 5th Dimension",
            img: "https://images-assets.nasa.gov/image/PIA20912/PIA20912~thumb.jpg",
            description: "Bored of your neighborhood? Bored of your typical vacation? Go to the 5th dimension",
            price: 1,
            qty: 54,
            __v: 0
        }
    ];


    Records.create(newRecords, (err, record) => {
        if (err) { console.log(err); }
        console.log("SEED: NEW ENTRIES CREATED!");
        res.redirect('/music');
    });
});

//___________________
//ALTERNATE Seed Route - Vist ONCE to populate database
//___________________
const musicSeeds = require('../models/seed.js');
music.get('/seed/newmusic/viaseedfile', (req, res) => {
    Records.insertMany(musicSeeds, (err, records) => {
        if (err) { console.log(err); } else {
            res.send(records);
        }
    });
});

//___________________
//Mistakes happen! Drop Database - Vist ONCE to drop your database. WARNING! YOU CANNOT UNDO THIS!
//___________________
music.get('/dropdatabase/cannotundo/areyoursure/reallysure/okthen', (req, res) => {
    Records.collection.drop();
    res.send('You did it! You dropped the database!');
});

//___________________
//Module Exports - access this file in server.js
//___________________
//Export router AND require it in server.js Step 3/3
//Note all three need to be working in order to get server runnning
module.exports = music;