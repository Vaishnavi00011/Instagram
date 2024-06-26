const mongoose = require("mongoose")

const UserDetailSchema = mongoose.Schema({
    mobile: Number,
    fullName: String,
    username: String,
    password: String,
    dp: String,
    post: [
        {
            image : String,
            likes : Array,
            Comment : Array,
            share : Array,
            caption : String
        }
    ],
    follower: Array,
    following : Array
    })

module.exports = mongoose.model("UserDetail", UserDetailSchema);