const fs = require("fs");
const path = require("path");

module.exports = {
    newNote,
    validateNote,
    findbyId
};

function newNote (body, notesArray) {
    const note = body;
    notesArray.push(note);
   fs.writeFileSync(
       path.join(__dirname, '../db/db.json'),
       JSON.stringify( notesArray, null, 2)
   );
return note;
}

// find by id
function findbyId (id, notesArray) {
const result = notesArray.filter(note => note.id === id)[0];
return result;
}

// validate 
function validateNote  (note) {
    if(!note.title || typeof note.title !== 'string') {
        return false;
    }
    if(!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
    }
    
    
   