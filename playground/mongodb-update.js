const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');
    
    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("5bebd0844f8e8614f8c46298")
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then ( (result) => {
    //     console.log(result);
    // });
    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("5bea7c96914dc01340387d7a")
    },{
        $set: {
            name: 'Ran Har-Shuv'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then ( (result) => {
        console.log(result);
    });

    //client.close();
});