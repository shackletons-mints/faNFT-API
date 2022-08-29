const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Fan = require('./db/models/fanModel')

const db = require('./db')
require('dotenv').config()

const PORT = 8080

const app = express()

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    allowedHeaders: [
        'Access-Control-Allow-Origin',
        'Content-Type',
        'x-access-token'
    ]
}))

// ROUTES
app.get('/get-fan', async (req, res) => {
    try {
        const uri = req.query.uri

        const result = await Fan.findOne({ uri }).exec()

        return res.json(result)
    } catch (error) {
        console.error(error)
    }
})

app.get('/get-paginated-fans', async (req, res) => {
    try {
        const { start, end } = req.query

        const allFans = await Fan.find({})

        const selectedFans = allFans.slice(start, end)

        return res.json(selectedFans)
    } catch (error) {
        console.error(error)
        return res.json(error)
    }
})

app.post("/fan", async (req, res) => {
    try {
        const { payload } = req.body
        const { cid, title } = JSON.parse(payload)

        const result = await Fan.create({
            cid,
            title,
            owner: null,
        })

        return res.json(result)
    } catch (error) {
        console.error(error)
    }
})

app.put("/fan", async (req, res) => {
    try {
        const { payload } = req.body
        const { cid, ownerAddress } = JSON.parse(payload)

        const result = await Fan.findOneAndUpdate(
            { cid },
            { $set: { owner: ownerAddress }}
        ).exec()
  
      return res.json(result)
    } catch (error) {
      console.error(error)
    }
})

app.post('/test', (req, res, next) => {
    const { payload } = req.body
    const useableData = JSON.parse(payload)
        // or destructured...
        // const { hello, bye } = JSON.parse(payload)
    console.log(useableData)
    res.send({ success: true })
})

app.listen(PORT, () =>  {
    console.log('Listening on port ' + PORT)
})
