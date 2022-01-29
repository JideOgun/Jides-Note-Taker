const path = require('path');
const router = require('express').Router();



// Route for the home page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});


// Route for the notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});


//ADDING A WILCARD ROUTE I.E ROUTES THAT DO NOT EXIST
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});


module.exports = router;