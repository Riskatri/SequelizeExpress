var model = require("../models/index");

module.exports = function(app){

    app.post("/books", function(req,res){
        const { id, title, author, publised_date, pages, language, publised_id} = req.body;
        model.Book.create({
            
            title: title,
            author: author,
            publised_date: publised_date,
            pages: pages,
            language: language,
            publised_id: publised_id
        })
        .then(books => res.status(201).json({
            data: books,
            massage: "has been created"
        }))
        .catch(error => res.status(500).json({
            data: [],
            error: error
        })
        );
    });
    app.get("/books", function(req,res){
        model.Book.findAll({})
        .then(books => res.status(201).json({
            data: books
        }))
        .catch(error=> res.status(500).json({
            data: [],
            error: error
        }))
    });
    app.put("/books/:id", function(res,req){
        const book_id = req.params.id;
        const { id, title, author, publised_date, pages, language, publised_id} = req.body;
        model.Book.update(
            {
            id : id,
            title: title,
            author: author,
            publised_date: publised_date,
            pages: pages,
            language: language,
            publised_id: publised_id
            },
            {
                where: {
                    id: book_id
                }
            }
        )
        .then(books => res.status(201).json({
            data: books,
            massage: "book has been update"
        }))
        .catch(error => res.status(500).json({
            error: error
        }))
    });
    app.delete("books/:id",function(req,res){
        const book_id = req.params.id;
        model.Book.destroy({
            where:{
                id: book_id
            }
        })
        .then(status => res.status(201).jso({
            message: "book has been delete"
        }))
        .catch(error => res.status(500).json({
            error:error
        }))
    })
}