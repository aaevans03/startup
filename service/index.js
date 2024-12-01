const express = require('express');
const uuid = require('uuid');
const app = express();

const machine = require('./machineService.js');

// The users are saved in memory, and disappear whenever the service is restarted.
let users = {};

const machinesArray = [];

// for (let i = 0; i <= 16; i++) {
//     machinesArray.push(new Machine(i));
// }

// to add: store machine objects in backend, for when someone uses them.

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

const user = { email: "1@1.com", password: "a", name: "Alex", buildingNumber: 4, roomNumber: 3102 };
users[user.email] = user;


// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
        res.status(409).send({ msg: 'Existing user' });
    }
    else {
        const user = { email: req.body.email, password: req.body.password, name: req.body.name, buildingNumber: req.body.buildingNumber, roomNumber: req.body.roomNumber, token: uuid.v4() };
        users[user.email] = user;
    
        res.send({ token: user.token });
    }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
        if (req.body.password === user.password) {
            user.token = uuid.v4();
            res.send({
                name: user.name,
                buildingNumber: user.buildingNumber,
                roomNumber: user.roomNumber,
                token: user.token
            });
            return;
        }
        else {
            res.status(401).send({ msg: 'Username or password does not match'})
            return;
        }
    }
    res.status(401).send({ msg: 'User does not exist' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
    const user = Object.values(users).find((u) => u.token === req.body.token);
    if (user) {
        delete user.token;
    }
    res.status(204).end();
});


/*
// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});
*/


// Laundry quotes service: fetch from a .json file
const quoteJson = require('./quotes.json');
apiRouter.get('/quotes', (req, res) => {
    const randomNum = Math.floor(Math.random() * 15) + 1;
    const randomQuote = quoteJson[randomNum];
    res.json(randomQuote);
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});