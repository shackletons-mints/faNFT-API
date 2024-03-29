const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
})

const db = mongoose.connection
db.on("error", () => {
    console.log("Error connecting to the database")
})
db.once("open", () => {
    console.log("Successfully running db")
})

module.exports = mongoose
