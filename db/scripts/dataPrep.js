const fs = require("fs");

const initFanCollection = []

for (let i = 1; i < 501; i++) {
    const paddedHex = ("0000000000000000000000000000000000000000000000000000000000000000" + i.toString(10)).substr("-64");

    initFanCollection.push({
        uri: `https://bafybeiad4cjnorjvotfqx737c2aha2fuvg2rfo6bznio22vbw6iyuyqs7y.ipfs.nftstorage.link/${paddedHex}.json`,
    })

}

fs.writeFileSync('./fanUrisForMongo.json', JSON.stringify(initFanCollection))
