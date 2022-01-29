const path = require('path');
const router = require('express').Router();


//ADDING A WILCARD ROUTE I.E ROUTES THAT DO NOT EXIST
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

// Route for the notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../Develop/public/notes.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});


module.exports = router;