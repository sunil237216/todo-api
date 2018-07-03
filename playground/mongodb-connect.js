const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>
{
 if(err)
 {
   return  console.log('unable to connect to mongo db server'+err);
 }
    console.log('connected to mongodb server');
  /*   var db = client.db('TodoApp');

    db.collection('todo').insertOne({
       text:'something tod do',
       completed :false },(err,result) => {
        
        if(err){

          return console.log('unable to inseert');
        }
     //  console.log(JSON.stringify(result,ops,undefined,2));
       
    }); */

    var db = client.db('TodoApp');

    db.collection('User').insertOne({
       Name:'sunil',
       age:26,
       location:'Mumbai'
        },(err,result) => {
        
        if(err){

          return console.log('unable to inseert');
        }
      console.log(JSON.stringify(result.ops,undefined,2));
       
    });

     client.close();


});
