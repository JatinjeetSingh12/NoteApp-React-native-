const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Notes = require('../model/Notesmodel');
const Savemodal = require('../model/Savemodal');

//add a new note
router.post('/addnotes', [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('image', 'Image URL'),
    body('description', 'description length must be atleast 5').isLength({ min: 5 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {

        const { title, image, description, tag } = req.body;

        const note = new Notes({
            title, image, description, tag
        })
        const notes = await note.save();
        res.json(notes);
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


router.post('/savenotes', [
    body('title', 'Enter a valid title'),
    body('image', 'Image URL'),
    body('description', 'description length must be atleast 5'),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { title, image, description, tag } = req.body;
        const savednote = new Savemodal({
            title, image, description, tag
        })
        const savednotes = await savednote.save();
        res.json(savednotes);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }

    router.get('/readsavenotes',a)

})



module.exports = router