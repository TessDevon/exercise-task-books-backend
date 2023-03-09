var express = require('express');
var router = express.Router();
const cors = require('cors');

let books = [
    {id:1, title: "Ensamma i skogen", author: "Anna Johansson", numberOfPages: "24", lendingStatus: false},
    {id:2, title: "Min lilla stjärna på himlen", author: "Johan Annansson", numberOfPages: "15", lendingStatus: false},
    {id:3, title: "Magen alla hemlighter", author: "Magnus Magnusson", numberOfPages: "150", lendingStatus: false},
    {id:4, title: "Havets faser", author: "Johan Havslund", numberOfPages: "65", lendingStatus: false},
    {id:5, title: "Tomtens semester", author: "Nikolaus Thomsson", numberOfPages: "150", lendingStatus: true},
    {id:6, title: "Min lilla häst och jag", author: "Hanna Hastsson", numberOfPages: "68", lendingStatus: false},
    {id:7, title: "Lilla nybörjarodlaren", author: "Hans Trädgård", numberOfPages: "78", lendingStatus: true}
]

router.get('/', function(req, res, next) {
    res.json(books);
});

router.get('/:bookId', function(req, res, next) {

    let bookId = req.params.bookId;

    let findBook = books.find(book => book.id == bookId);

    res.json(findBook);
});

router.patch('/:bookId', function(req, res, next) {

    let bookId = req.params.bookId;

    let findBook = books.find(book => book.id == bookId);

    findBook.lendingStatus = req.body.lendingStatus;

    res.json(findBook);
});

router.post('/', function(req, res, next){
/*    let newBook = {};
    newBook.title = req.body.title;
    newBook.numberOfPages = req.body.numberOfPages;
    newBook.author = req.body.author;
    newBook.lendingStatus = req.body.lendingStatus;*/
    let newBook = req.body;
    newBook.id = books.length+1;
    books.push(newBook);
    console.log(newBook);


    res.json(books);

});

module.exports = router;

/**Saker som jag hade velat utveckla vidare i denna uppgift:
 * Lämna tillbaka boken och ändra statusen i backenden.
 * Krav på inputfälten.
 * Ta bort bok. 
*/

