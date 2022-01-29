const router = require('express').Router();
const db = require('../../db/db.json');


const { validateNote, newNote, findbyId } = require('../../lib/notes');

// Get route to retrieve info from json file
router.get('/notes', (req, res) => {
    res.json(db);
});

//Get route to retrieve specific info
router.get('/notes/:id', (req, res) => {
    const params = [req.params.id];
    const result = findById(req.params.id, db);
    console.log(result);
    if(result) {
        res.json(result);
    } else {
        res.send(404);
    }
});


// Post router to update json file
router.post('/notes', (req, res) => {
    console.log(req.body);
    req.body.id = db.length.toString();
      // if any data iin req.body is incorrect, send 400 error back
      if(!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
         // adding new object from post request to db json object
    const note = newNote(req.body, db);
    res.json(note);
    }
});

// Delete route
router.delete(`/notes/:id`, (req, res) => {
    
   console.log(req.body);
       res.json({
        message: 'Deleted'
        });
    
    
});


module.exports = router;
