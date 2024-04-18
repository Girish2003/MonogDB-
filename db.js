// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;
const mongoose=require('mongoose');

// let database;

async function getDatabase(){
    // const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
    // database = client.db('library');

    // if (!database) {
    //         console.log('Database not connected');
    // }

    // return database;
    mongoose.connect('mongodb+srv://girish:1234@cluster0.8vxaew4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
        console.log("DB connected")
    }).catch(()=>{
        console.log("DB connection error!");
    })
}

module.exports = {
    getDatabase,
    // ObjectID
}