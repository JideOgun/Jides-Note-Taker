const express = require('express');
const app = express();
const db = require('./Develop/db/db.json');
const path = require('path');
const fs = require('fs');

// for parsing incoming json data made from a POST request
app.use(express.json());
// for parsing application/x-www-wform-urlencoded (string or array data)
app.use(express.urlencoded({ extended: true }));
//
app.use(express.static('public'));

const PORT = process.env.PORT || 3001;


app.get('/api/notes', (req, res) => {
    res.json(db);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});


app.post('/api/notes', (req, res) => {
    console.log(req.body);
    req.body.id = db.length.toString();
    // console.log(req.body.id);
    // res.json(req.body);

    // adding new object from post request to db json object
    const note = NewNote(req.body, db);

    res.json(note);
});


NewNote = function(body, notesArray) {
    const note = body;
    notesArray.push(note);
   fs.writeFileSync(
       path.join(__dirname, './Develop/db/db.json'),
       JSON.stringify({ notes: notesArray }, null, 2)
   );
return note;
};


// validate 
validateNote = function () {
if(!notes.title || typeof notes.title !== 'string') {
    return false;
}
if(!notes.text || typeof notes.text !== 'string') {
    return false;
}
};

app.listen(PORT, () => {
        console.log(`API server is now on ${PORT}!`);
});