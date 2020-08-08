const { findById, createNewNote, showNotes} = require('../../lib/notes');
const { notes } = require('../../db/db.json');
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

    req.body.id = notes.length.toString();

    const notes = createNewNote(req.body, notes);

    res.json(notes);
});

module.exports = router;