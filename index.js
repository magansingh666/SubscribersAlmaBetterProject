const express = require('express')
const app = require('./src/app.js')
const mongoose = require('mongoose')
require('dotenv').config();
const port = 3000 || process.env.PORT

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// database connection string -- local instance of mongo db
const DATABASE_URL = "mongodb://localhost:27017/subscribers";

// database connection string -- on mongo db atlas, cloud deployment
const DATABASE_URL2 = `mongodb+srv://msingh111:${process.env.DBPASS}@cluster0.myt71op.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(DATABASE_URL2,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))

