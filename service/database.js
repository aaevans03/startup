const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');
const { build } = require('vite');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}/?retryWrites=true&w=majority&appName=Startup`;
const client = new MongoClient(url);

// the database we're inserting into
const db = client.db('laundry-app');

// this is the collection we are inserting into
const userCollection = db.collection('user');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
})().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

function getUser(email) {
    return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
    return userCollection.findOne({ token: token });
}

async function createUser(email, password, name, buildingNumber, roomNumber) {
    // Hash the password before putting it into the database
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: email,
        password: passwordHash,
        name: name,
        buildingNumber: buildingNumber,
        roomNumber: roomNumber,
        token: uuid.v4(),
    };

    await userCollection.insertOne(user);

    return user;
}


module.exports = {
    getUser,
    getUserByToken,
    createUser,
};
