const mongoose = require("mongoose")

const Fan = require('../models/fanModel.js')
const jsonFanMetadata = require('../data/jsonFanMetadata.json')

mongoose.connect("NOPE", {
    useNewUrlParser: true,
})

const db = mongoose.connection

const performWrite = async (documents) => {
    let res = await Fan.insertMany(documents)

    console.log(res)
}


db.on("error", () => {
    console.log("Error connecting to the database")
})
db.once("open", () => {
    console.log("Successfully running db")
    // console.log('This is a soft check for the fan model', Fan)
    // console.log('This is a soft check for the json data', jsonFanMetadata)

    performWrite(jsonFanMetadata)
})

