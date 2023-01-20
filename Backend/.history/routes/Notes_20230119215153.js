const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Notes = requi

//add a new note
router.post('/addnotes', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description length must be atleast 5').isLength({ min: 5 })
], async (req, res) => {
    try {
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });

        }

        const { title, description, tag } = req.body;

        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savednote = await note.save();
        res.json(savednote);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured");
    }

})