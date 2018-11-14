const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');
 
    
    // client.db('TodoApp').collection('Todos').insertOne( {
    //     Text: 'Something to do',
    //     Complited: false
    // }, (err, result) => {
    //     if ( err ) {
    //         return console.log('Unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    client.db('TodoApp').collection('Users').insertOne( {
        name: 'Ran Har-Shuv',
        age: 48,
        location: 'Haifa'
    }, (err, result) => {
        if ( err ) {
            return console.log('Unable to insert User', err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });

    client.close();
});