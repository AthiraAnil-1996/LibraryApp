const express = require('express');
const Book = require('./src/model/librarymodel');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = new express();
const path = require('path');

app.use(cors());
app.use(bodyparser.json());
app.use(express.static('./dist/front-end'));


app.post("/api//signup", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  var cred = {
    email : req.body.email,
    password : req.body.password,
  };
  var db = new details(cred);
  db.save();
  res.send();
});

app.post("/api/login", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE");
  details
  .findOne({ email: req.body.email, password: req.body.password },(err,user)=>{
    if(err){
      console.log("error is",err)
    }
    else{
      console.log(user)
    }
  }).clone()
  .then((user) => {
    if(user !== null){
    let payload = { subject: user.email + user.password };
    let token = jwt.sign(payload, "secretKey");
    res.status(200).send({ token });
    }
    else{
      res.status(401).send('Wrong Credentials')
    }
  });

});


app.get('/api/Library', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET, POST, PUT, DELETE");

    Book.find()
        .then(function (book) {
            res.send(book);
        })
})

app.post('/api/insert',function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET, POST, PUT, DELETE");
    var book = {

        Id: req.body.item.Id,
        imageUrl: req.body.item.imageUrl,
        title: req.body.item.title,
        author: req.body.item.author,
        pages: req.body.item.pages,
        price: req.body.item.price
        

    }

    var books = new Book(book);
    books.save();

})

app.get('/api/:id',(req,res)=>{
    Book.findById(req.params.id)
    .then((data)=>{
        console.log(data);
        res.send(data);
    })
})

app.put("/api/update", (req, res) => {
    Book.findByIdAndUpdate(
      req.body._id,
      {
        $set: {
            Id: req.body.Id,
            imageUrl: req.body.imageUrl,
            title: req.body.title,
            author: req.body.author,
            pages: req.body.pages,
            price: req.body.price,
        },
      },
      { new: true },
      (err, updatedBook) => {
        if (err) {
          res.send("Error While Updating");
        } else {
          res.send(updatedBook);
        }
      }
    );
  });
app.delete('/api/remove/:id',(req,res)=>{

    
    Book.findByIdAndDelete(req.params.id)
    .then(()=>{
        console.log("Success");
        res.send();
    })

})

app.get('/*', function (req,res) {

  res.sendFile(path.join(_dirname + '/dist/front-end/index.html'));
})
app.listen(process.env.PORT||3000);

