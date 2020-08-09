const { findById, createNewNote } = require('../../lib/notes.js');
const notes = require('../../db/notes.json');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } 
    else {
        res.send(404);
    }
});

router.post('/notes', (req, res) => {
    console.log(req.body);

    req.body.id = notes.length + 1

    const newNotes = createNewNote(req.body, notes);

    res.json(newNotes);
});

module.exports = router;