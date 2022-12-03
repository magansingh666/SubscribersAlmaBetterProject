const express = require("express");
const app = express();
const Subscribers = require("../src/models/subscribers");

// Your code goes here

app.get("/subscribers", async (req, res) => {
  const subscribers = await Subscribers.find();
  console.log(subscribers);
  res.json(subscribers);
});

app.get("/subscribers/names", async (req, res) => {
  const subscribersWithNames = await Subscribers.find(
    {},
    { name: 1, subscribedChannel: 1, _id: 0 }
  );
  console.log(subscribersWithNames);
  res.json(subscribersWithNames);
});

app.get("/subscribers/:id", async (req, res) => {
    try {
        const subscriberById = await Subscribers.findById(req.params.id);
        console.log(subscriberById);
        res.json(subscriberById);

    }catch(err){
        res.status(400).json({error: "error"})
    }

 
});

module.exports = app;

/*
GET
[http://localhost:3000/subscribers](http://localhost:3000/subscribers)
Response with an array of subscribers(an Object)
GET
[http://localhost:3000/subscribers/names]
(http://localhost:3000/subscribers/names) Response with an array of subscribers(an
Object with only two fields name and subscribedChannel)
GET
[http://localhost:3000/subscribers/:id]
(http://localhost:3000/subscribers/:id) Response with a subscriber*(an object)* with
given id. Response with status code 400 and Error message({message:
error.message})
if id does not match



const express = require("express");

const Note = require("../models/Note");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const router = express.Router();

router.get('/fetchallnotes', fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (errors) {
    res.status(500).send("Internal Server Error");
  }
});

router.post(
  '/addnote',
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();

      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


router.put('/updatenote/:id', fetchuser, async (req, res) => {
     const {title, description, tag} = req.body;
     let note = await Note.findById(req.params.id);
     if(!note){res.status(404).send("Not found");}

     if(note.user.toString() !== req.user.id){
        console.log(note.user.toHexString, req.user.id);
        return res.status(401).send("not allowed");        
     }        

     if(title){note.title = title}
     if(description){note.description = description}
     if(tag){note.tag = tag}

     await note.save();
     res.json({note});  

});

router.delete('/deletenote/:id', fetchuser, async (req, res) => { 

     let note = await Note.findById(req.params.id);
     if (note == null) {
       res.status(404).send("Not found hi iiiiii ");
       return;
     }
     if (note.user._id != req.user.id) {
       console.log(note.user._id);
       return res.status(401).send("not allowed");
     }
     await note.delete();
     res.json({ message: "note has been deleted", ...note });

});
module.exports = router;




*/
