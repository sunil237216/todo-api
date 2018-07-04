const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>
{
 if(err)
 {
   return  console.log('unable to connect to mongo db server'+err);
 }
    console.log('connected to mongodb server');
    var db = client.db('TodoApp');
    var ObjectId = require('mongodb').ObjectID;

  /*   db.collection('todo').findOneAndUpdate({
      _id :ObjectId("5b3b4b22d0a62f0e18197441")},
      {
        $set:{
          completed:true
        }
      },{
          returnOriginal:false
    }).then((result) =>{
      console.log(result);
      }); */

      db.collection('User').findOneAndUpdate({
        _id :ObjectId("5b3b5909289fa206958bd5c6")},
        {
          $set:{
            name:"Jadhav"
          },
          $inc:{

             age:1
          }
        },{
            returnOriginal:false
      }).then((result) =>{
        console.log(result);
        });
     client.close();


});
