const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
        console.log('Connected to MongoDB server');

    var db = client.db('TodoApp');
    
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then( (result) => {
    //     console.log(result);
    // }, (reason) => {
    //     console.log('failed to delete', reason);
    // })

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then ( (result) => {
    //     console.log(result);
    // }, (reason) => {
    //     console.log('failed to delete', reason);
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then ( (result) => {
    //     console.log(result);
    // }, (reason) => {
    //     console.log('failed to delete', reason);
    // })

    // db.collection('Users').deleteMany({name: 'Ran Har-Shuv'}).then( (result) => {
    //     console.log(result);
    // }, (reason) => {
    //     console.log('failed to delete', reason);
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5bea95a7a3ffad2770ba061c')}).then ( (result) => {
        console.log(result);
    }, (reason) => {
        console.log('failed to delete', reason);
    })


    //client.close();
});