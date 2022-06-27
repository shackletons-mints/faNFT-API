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
