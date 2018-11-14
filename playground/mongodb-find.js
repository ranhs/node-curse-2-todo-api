const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
        console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('5bea7bf133b8f82468433736')
    // }).toArray().then( (docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs,undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then( (count) => {
    //     console.log(`Todos count ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Todos').find({text: 'Eat lunch'}).toArray().then( (docs) => {
        console.log("Users:");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch users', err);
    })

    //client.close();
});