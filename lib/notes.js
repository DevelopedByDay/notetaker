const fs = require('fs');
const path = require('path');

function findById(id, notes) {
    const result = notes.filter(note => note.id === id)[0];
    return result;
};

function createNewNote(body, notes) {
    const note = body;

    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ note: notes }, null, 2)
    );
    return note;
}

module.exports = {
    findById,
    createNewNote,
};