const express = require("express")
const bodyParser = require("body-parser")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const {expressjwt} = require("express-jwt")
//const MongoClient = require("mongodb").MongoClient

app.use(express.json())
app.use(morgan("dev"))

mongoose.connect("mongodb://localhost:27017/Rock-The-Vote", () =>
    console.log("Connected to the DB")
)

app.use('/auth', require('./routes/authRouter'))
app.use('/api', expressjwt({ secret: process.env.DB_STRING, algorithms: ['HS256'] }))
app.use('/api/todo', require('./routes/issueRouter'))

app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})



//Make sure to place the body-parser before the CRUD handlers
// app.use(bodyParser.urlencoded({extended: true}))


// MongoClient.connect(process.env.DB_STRING, { useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to Database')
//     const db = client.db("Rock-The-Vote")
//     const issuesCollection = db.collection("issues")


//     //app.get(endpoint, callback)
//     app.get("/", (req, res) => {
//         res.sendFile(__dirname + "/index.html")
//     })

//     app.post("/issues", (req, res) => {
//         console.log(req.body)
//         issuesCollection.insertOne(req.body)
//         .then(result => {
//             res.redirect("/")
//         })
//         .catch(err => console.error(error))
//     })
//   })
//   .catch(error => console.error(error))



app.listen(3000, function() {
    console.log("Listening on 3000")
})
