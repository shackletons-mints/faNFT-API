const { PORT } = require('./config.js')

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Fan = require('./db/models/fanModel')
const db = require('./db')

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
        return res.json(error)
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

app.put("/put-fan", async (req, res) => {
    try {
        const { payload } = req.body
        const { uri, owner } = payload

        const result = await Fan.findOneAndUpdate(
            { uri },
            { $set: { owner: owner }}
        ).exec()

      return res.json(result)
    } catch (error) {
      console.error(error)
      return res.json(error)
    }
})

app.listen(PORT, () =>  {
    console.log('Listening on port ' + PORT)
})

// TEST PAYLOAD
// {
//     "payload" = {
//         "uri": "https://bafybeiad4cjnorjvotfqx737c2aha2fuvg2rfo6bznio22vbw6iyuyqs7y.ipfs.nftstorage.link/0000000000000000000000000000000000000000000000000000000000000001.json",
//         "owner": "0xEB1e4Ff457D42B795edF00333Bb1d519fb423a72"
//     }
// }