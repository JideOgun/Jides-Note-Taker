const express = require('express');
const app = express();
const db = require('./Develop/db/db.json');
const path = require('path');
const fs = require('fs');



// middleware for the front end files, css, and js
app.use(express.static('public'));
// for parsing incoming json data made from a POST request
app.use(express.json());
// for parsing application/x-www-wform-urlencoded (string or array data)
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3001;

//ADDING A WILCARD ROUTE I.E ROUTES THAT DO NOT EXIST
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

// Get route to retrieve info from json file
app.get('/api/notes', (req, res) => {
    res.json(db);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

// Post router to update json file
app.post('/api/notes', (req, res) => {
    console.log(req.body);
    req.body.id = db.length.toString();
    
    
    // if any data iin req.body is incorrect, send 400 error back
    if(!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
         // adding new object from post request to db json object
    const note = NewNote(req.body, db);
    res.json(note);
    }

   
});


NewNote = function(body, notesArray) {
    const note = body;
    notesArray.push(note);
   fs.writeFileSync(
       path.join(__dirname, './Develop/db/db.json'),
       JSON.stringify( notesArray, null, 2)
   );
return note;
};


// validate 
validateNote = function (note) {
if(!note.title || typeof note.title !== 'string') {
    return false;
}
if(!note.text || typeof note.text !== 'string') {
    return false;
}
return true;
};

app.listen(PORT, () => {
        console.log(`API server is now on ${PORT}!`);
});