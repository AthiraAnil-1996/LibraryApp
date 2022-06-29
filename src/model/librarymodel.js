const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;

const Book = new Schema({
    Id: Number,
    imageUrl: String,
    title: String,
    author: String,
    pages: Number,
    price: Number
    

})

const booklist = mongoose.model('book',Book);
module.exports = booklist;
