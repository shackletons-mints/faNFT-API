const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const PORT = 8080

const app = express()

app.get('/get-fans?page={x}', (req, res) => {
    const { page } = req.params
    // get a page num as a param

    // return five fans
        // fan = { cid, title }
})

app.post('/post-fan/{metadata}{walletAddress}', (req, res) => {
    /**
     * imaginary database
     * 
     *  fan {
     *      cid,
     *      title,
     *      owner: walletAddress
     *  }
     * 
     */

    // pinJSONToIPFS(process.env.PINATA_API_KEY, process.env.PINATA_SECRET_API_KEY, nftMetadata)
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.post('/test', (req, res, next) => {
    const { payload } = req.body
    const useableData = JSON.parse(payload)
        // or destructured...
        // const { hello, bye } = JSON.parse(payload)
    console.log(useableData)
    res.send({ success: true })
})



app.listen(PORT, () => console.log('Listening on port ' + PORT))
