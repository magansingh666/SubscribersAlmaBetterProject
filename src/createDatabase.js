const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')

// database connection string  -- local instance
const DATABASE_URL = "mongodb://localhost:27017/subscribers";
//database connection string  -- on mongo db Atlas , clound deployment
const DATABASE_URL2 = `mongodb+srv://msingh111:${process.env.DBPASS}@cluster0.myt71op.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(DATABASE_URL2,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()


//mongodb://localhost:27017