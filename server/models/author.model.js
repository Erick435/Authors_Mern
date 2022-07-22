const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name of author is required"],
        minlength: [3, "Must have a minimum of 3 characters"]
    }
}, {timestamps:true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;