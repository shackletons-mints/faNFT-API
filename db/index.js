// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app')
// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore')

// const serviceAccount = require('./config/serviceAccountKey.json')

// const app = initializeApp({
//   credential: cert(serviceAccount)
// })

// const db = getFirestore()

// console.log('db', db.collection('fans'))

// module.exports = {
//     db
// }

const mongoose = require("mongoose")
require('dotenv').config()

const dbPath = process.env.MONGO_CONNECTION

mongoose.connect(dbPath, {
    useNewUrlParser: true,
})

const db = mongoose.connection
db.on("error", () => {
    console.log("Error connecting to the database")
})
db.once("open", () => {
    console.log("Successfully running db")
});

module.exports = mongoose
