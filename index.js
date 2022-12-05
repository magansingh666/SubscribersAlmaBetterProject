const express = require('express')
const app = require('./src/app.js')
const mongoose = require('mongoose')
require('dotenv').config();
const port = 3000

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







/*
const mongoose = require('mongoose');
const pass = process.env.DBPASS;
const mongoUri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";
const mongoUri2 = `mongodb+srv://msingh111:${pass}@cluster0.myt71op.mongodb.net/?retryWrites=true&w=majority`;
const connectToMongo = () => {
mongoose.connect(mongoUri, ()=> {console.log("connected to mongo")})
};
module.exports = connectToMongo;

const mongoUri2 = `mongodb+srv://msingh111:C8t3t7ShYJCSKZmP@cluster0.myt71op.mongodb.net/?retryWrites=true&w=majority`;




DBPASS=C8t3t7ShYJCSKZmP



"name": "SubscribersAlmaBetterProject",
        "id": "30e99fed-0f55-4687-87bd-fadf301ffecd",
        "project": "d0gzyt61",
        "runtime": "nodejs14.x",
        "endpoint": "https://b1k4jk.deta.dev",
        "region": "ap-south-1",
        "visor": "disabled",
        "http_auth": "disabled"





*/