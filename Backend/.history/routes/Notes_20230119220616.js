const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Notes = require('../model/Notesmodel')

//add a new note
router.post('/addnotes', [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('image', 'I'),
    body('description', 'description length must be atleast 5').isLength({ min: 5 }),
], async (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, img, description, tag } = req.body;

        const note = new Notes({
            title, img, description, tag
        })
        const savednote = await note.save();
        res.json(savednote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }

})

router.get('/fetchallnotes', async (req, res) => {
    try {
        const notes = await Notes.find()
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }
})




module.exports = router