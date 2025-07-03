const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
//const fetchUser = require('../middleware/fetchUser');

const Note = require('../models/Notes'); 
const { body, validationResult } = require('express-validator');

// Route 1: Get all notes using: GET "/api/auth/fetchallnotes" — Login required
router.get('/fetchallnotes',  async (req, res) => {
    try {
        const notes = await Note.find() // fixed model name
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Internal Server Error');
    }
});

router.get('/fetchnotes', fetchuser, async (req, res) => {
  try {
    // Only fetch notes where user === logged-in user's ID
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Internal Server Error');
  }
});





// Route 2: Add new notes using: POST "/api/auth/addnotes" — Login required
router.post('/addnotes', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title,
            description,
            tag,
            user: req.user.id
        });

        const savedNote = await note.save();
        res.json({ savedNote }); // fixed res.json

    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Internal Server Error'); // fixed status code
    }
});
// Route 3: update an existing notes using: PuT "/api/auth/updatenote" — Login required
    router.put('/updatenote/:id', fetchuser,  async (req, res) => {
           const {title,description,tag,} = req.body;
           try{

           
           // Create a newNote object
           const newNote = {};
           if(title){newNote.title = title};
           if(description){newNote.description = description};
           if(tag){newNote.tag = tag}

           //find the note to be upated and upadte it
           let note = await Note.findById(req.params.id);
           if(!note){return res.status(404).send("Not Found")}
           if(note.user.toString()!== req.user.id){return res.status(401).send("Not Allowed")}

           note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
           res.json({note}); 
           }  catch (error) {
        console.error(error.message);
        return res.status(500).send('Internal Server Error'); // fixed status code
             } 
        })

        // Route 4: delete an existing notes using: delete "/api/auth/deletenote" — Login required
            router.delete('/deletenote/:id', fetchuser, async (req, res) => {
               try {
                   // Find the note to be deleted
                   let note = await Note.findById(req.params.id);
                   if (!note) {return res.status(404).send("Not Found");}

        // Allow deletion only if user owns this note
                   if (note.user.toString() !== req.user.id) {return res.status(401).send("Not Allowed");}

        // Delete the note
                   await Note.findByIdAndDelete(req.params.id);
                   res.json({ success: "Note has been deleted", note:note });
               } catch (error) {
                   console.error(error.message);
                  res.status(500).send("Internal Server Error");
    }
});

module.exports = router;


