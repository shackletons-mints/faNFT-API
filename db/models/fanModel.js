const mongoose = require('../')

const schema = {
    uri: { type: mongoose.SchemaTypes.String, required: true },
    owner: { type: mongoose.SchemaTypes.String, },
}

const collectionName = "fans" // Name of the collection of documents
const fanSchema = mongoose.Schema(schema)
const Fan = mongoose.model(collectionName, fanSchema)
module.exports = Fan
