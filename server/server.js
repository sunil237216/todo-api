const express = require('express');

const _ =require("lodash");
const bodyParser = require('body-parser');
const {
    mongoose
} = require('./db/moongose');
const {
    Todo
} = require('./models/todo');
const {
    User
} = require('./models/user');
var app = express();

const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.post('/todos', (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.post('/todos/update', (req, res) => {
    Todo.findOneAndUpdate({
        _id :req.body.id},
        {
          $set:{
            text:req.body.text
          }
        },{
            returnOriginal:false
      }).then((result) =>{
        console.log(result);
        });
});


app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        })
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', function (req, res) {

    var id = req.params.id;
    var ObjectId = require('mongodb').ObjectID;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {

            res.status(404).send();
        }
        res.send({
            todo
        });
    }).catch((e) => {
        res.status(400).send();
    })

    //  res.send(req.params);

});

app.post('/users',(req,res) =>
{
var body =_.pick(req.body,['email','password']);
var user =new User(body);

user.save().then(() =>{
  // res.send(user);
   return user.generateAuthToken();

}).then((token) =>{

   res.header('x-auth',token).send(user);

}).catch((e) =>{
    console.log(e);
    res.status(400).send(e);
});
});





app.delete('/todos/:id', function (req, res) {


    var id = req.params.id;

    var ObjectId = require('mongodb').ObjectID;
    if (!ObjectId.isValid(id)) {
        return res.status(400).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {

            res.status(404).send();
        }
        res.send({
            todo
        });
    }).catch((e) => {
        res.status(400).send();
    })
});

app.listen(port, () => {

    console.log('started at port', port);
})