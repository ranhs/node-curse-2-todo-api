const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
        console.log('Connected to MongoDB server');

    var db = client.db('Todos');
    
    // db.collection('Todos').find({
    //     _id: new ObjectID('5be14a53244cf342d817ccad')
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

db.collection('Users').find({name: 'Ran Har-Shuv'}).toArray().then( (docs) => {
    console.log("Users:");
    console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
    console.log('unable to fetch users', err);
})

    //client.close();
});