const admin = require("firebase-admin")
const fs = require("fs")
const { slice } = require("lodash")
const _ = require("lodash")
const oldData = require("../src/data/old/data.json")

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    storageBucket: process.env.BUCKET_CS,
})

const getURLs = async (bucket, prefix = "") => {
    const files = await bucket.getFiles({
        prefix,
    })
    return Promise.all(
        files[0].map(async (file) => {
            const meta = await file.getMetadata()
            return {
                name: file.name.split("/").pop(),
                url: `https://firebasestorage.googleapis.com/v0/b/${
                    bucket.name
                }/o/${encodeURIComponent(file.name)}?alt=media&token=${
                    meta[0].metadata.firebaseStorageDownloadTokens
                }`,
            }
        })
    )
}
const getImagesURL = async (bucket) => {
    const seasons = Object.keys(oldData)
    return Promise.all(
        seasons.map(async (season) => {
            const urls = await getURLs(bucket, season)
            const sortedURLs = _.orderBy(slice(urls, 1), "name", "asc")
            const seasonData = _.orderBy(oldData[season], "imgPath", "asc")
            if (seasonData.length !== sortedURLs.length)
                throw new Error("invalid data")
            return {
                season,
                fetched: sortedURLs,
                actual: seasonData,
            }
        })
    )
}

let bucket = admin.storage().bucket(process.env.BUCKET_CS)

getImagesURL(bucket)
    .then((data) => {
        let places = []
        data.forEach((item) => {
            const seasonData = item.actual.map((value, index) => {
                if (value.imgPath !== item.fetched[index].name)
                    throw new Error("unmatched place name")
                return {
                    ...value,
                    url: item.fetched[index].url,
                    season: item.season,
                }
            })
            places = [...places, ...seasonData]
        })
        const JSONData = JSON.stringify(places)
        fs.writeFile("updatedData.json", JSONData, () => console.log("done !"))
    })
    .catch((err) => console.log(err))
