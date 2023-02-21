const mongoose = require("mongoose")
const Schema = mongoose.Schema

const issueSchema = new Schema ({
    title : {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imgUrl: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    votes: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Issue", issueSchema)
