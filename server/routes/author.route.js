const AuthorController = require("../controllers/author.controller");

module.exports = app => {
    //CREATE ROUTE
    app.post("/api/author/create", AuthorController.createAuthor)

    //READ ALL ROUTE
    app.get("/api/authors", AuthorController.findAllAuthor)

    //READ ONE ROUTE
    app.get("/api/author/:_id", AuthorController.findOneAuthor)

    //UPDATE ONE ROUTE 
    app.put("/api/author/update/:_id", AuthorController.updateOne)

    //DELETE ONE ROUTE
    app.delete("/api/author/delete/:_id", AuthorController.deleteOne)

}