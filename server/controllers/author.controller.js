const Author = require("../models/author.model");

//CREATE
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.json({message: "Error CREATING a new Author",
        error: err}))
}

//READ ALL AUTHORS
module.exports.findAllAuthor = (req, res) => {
    Author.find()
        .then(allAuthor => res.json(allAuthor))
        .catch(err => res.json({message: "Error FINDING ALL author", 
        error: err}))
}

//READ ONE AUTHOR
module.exports.findOneAuthor = (req, res) => {
    Author.find({_id: req.params._id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json({message: "Error FINDING ONE author",
        error: err}))
}

//UPDATE ONE AUTHOR
module.exports.updateOne = (req, res) => {
    Author.findOneAndUpdate({_id: req.params._id}, req.body, {new:true, runValidators: true})
        .then(updateAuthor => res.json(updateAuthor))
        .catch(err => res.json({message: "Error UPDATING ONE author",
        error: err}))
}

//DELETE ONE AUTHOR
module.exports.deleteOne = (req, res) => {
    Author.deleteOne({_id: req.params._id})
        .then(res.json({message: "DELETIING a author was successful"}))
        .catch(err => res.json({message: "Error DELETING ONE author",
    error: err}))
}