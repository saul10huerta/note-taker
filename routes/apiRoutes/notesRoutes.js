const router = require("express").Router();
const { saveNote } = require("../../lib/notes");
const { notes } = require("../../db/notes.json");

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
  
    const note = saveNote(req.body, notes);
    res.json(note);
    
});


module.exports = router;