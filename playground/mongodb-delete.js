const MongoClient=require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) =>
{
 if(err)
 {
   return  console.log('unable to connect to mongo db server'+err);
 }
    console.log('connected to mongodb server');
   // var db = client.db('TodoApp');

   /*  db.collection('todo').insertOne({
       text:'something tod do',
       completed :false },(err,result) => {
        
        if(err){

          return console.log('unable to inseert');
        }
     //  console.log(JSON.stringify(result,ops,undefined,2));
       
    });  */

/*     var db = client.db('TodoApp');

    db.collection('User').insertOne({
       Name:'sunil',
       age:26,
       location:'Mumbai'
        },(err,result) => {
        
        if(err){

          return console.log('unable to inseert');
        }
      console.log(JSON.stringify(result.ops,undefined,2));
       
    }); */

  /*   var db1 = client.db('TodoApp');

    db1.collection('todo').deleteMany({text:'eat lunch'}).then((result) =>{
     console.log(result);
    })
 */

/* var db1 = client.db('TodoApp');

db1.collection('todo').deleteOne({text:'eat lunch'}).then((result) =>{
 console.log(result);
}) */

var db1 = client.db('TodoApp');

db1.collection('User').deleteMany({Name:'sunil'});
  /*   db1.collection('todo').find().count().then((docs) =>{

    console.log(JSON.stringify(docs,undefined,2));
    console.log('count is '+count);


    },(err) => {

        console.log('unable to fetch records'+err);
    }
  
  ); */




     client.close();


});
