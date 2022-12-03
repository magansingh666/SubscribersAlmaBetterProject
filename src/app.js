const express = require("express");
const app = express();
const Subscribers = require("../src/models/subscribers");

// Your code goes here
//end point to get list of all subscribers. Login not required
app.get("/subscribers", async (req, res) => {
  const subscribers = await Subscribers.find();
  //console.log(subscribers);
  res.json(subscribers);
});

//end point to get names of all subscribers. Login not required
app.get("/subscribers/names", async (req, res) => {
  const subscribersWithNames = await Subscribers.find(
    {},
    { name: 1, subscribedChannel: 1, _id: 0 }
  );
 // console.log(subscribersWithNames);
  res.json(subscribersWithNames);
});


//end point to get a subscriber given its id.  Login not required. 
app.get("/subscribers/:id", async (req, res) => {
    try {
        const subscriberById = await Subscribers.findById(req.params.id);
       // console.log(subscriberById);
        res.json(subscriberById);

    }catch(err){
        res.status(400).json({error: "does not exist"})
    }

 
});

module.exports = app;
