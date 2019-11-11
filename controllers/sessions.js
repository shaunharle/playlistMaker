// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const session = require('express-session')
// const User = require('../models/users');

// //new client
// router.get('/login', (req, res) => {
//     res.render('../views/login.ejs')
// })

// // router.post('/', (req, res) => {
// //     User.findOne({ username: req.body.username }, (err, foundUser) => {
// //         if (req.body.username === "") {
// //             res.send('Please enter a username')
// //         } else if (req.body.password === "") {
// //             res.send('Please enter a password')
// //         } else if (!foundUser) {
// //             res.send('Username Invalid')
// //         } else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
// //             req.session.currentUser = foundUser;
// //             res.redirect('/');
// //         } else {
// //             res.send('wrong password');
// //         }
// //     })
// // })
// router.post("/", (req, res) => {
//     User.findOne({ username: req.body.username }, (err, foundUser) => {
//         if (bcrypt.compareSync(req.body.password, foundUser.password)) {
//             console.log("found", foundUser);
//             req.session.currentUser = foundUser;
//             res.redirect("/");
//         } else {
//             res.send("wrong password");
//         }
//     });
// });

// router.delete('/', (req, res) => {
//     req.session.destroy(() => {
//         res.redirect('/');
//     });
// })

// module.exports = router;