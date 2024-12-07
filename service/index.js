const express = require('express');
const uuid = require('uuid');
const app = express();

const Machine = require('./machineService.js');

// The users are saved in memory, and disappear whenever the service is restarted.
let users = {};
let machineUsageData = {};

// Storing machine states in the backend
const machinesArray = [];
for (let i = 1; i <= 16; i++) {
    machinesArray.push(new Machine(i));
}


// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// default user
const user = { email: "1@1.com", password: "a", name: "Alex", buildingNumber: 4, roomNumber: 3102 };
users[user.email] = user;

/*
    BACKEND MACHINE SERVICE ENDPOINTS

    - GET: Machine states from the backend, and update the main page
    - POST: When there's a new load, upload the current user and their info, the time of submission, and how long the machine was set for.
    
    - timer runs in the backend, which stores the current user, time, and set duration of the machines.
*/

// Send machine states from backend to the front in a JSON file
apiRouter.get('/machines/getloads', (_req, res) => {
    const output = JSON.stringify(machinesArray);
    res.json(output);
});

// New endpoint: Submit a new load
apiRouter.post('/machines/submitload', (req, res) => {

    // gets loads in seconds
    let id = req.body.id;
    let duration = req.body.duration;
    let curUser = req.body.curUser;
    let curUserEmail = req.body.email;
    let curUserRoom = req.body.room;

    const machine = Machine.GetById(id);

    // if machine is disabled, send an error
    if (machine.isDisabled !== false) {
        res.status(409).send({ msg: 'Machine is currently out of order' });
    }

    // if machine is already in use, send an error
    else if (machine.startDate !== null) {
        res.status(409).send({ msg: 'Machine already in use. Please choose another one' });
    }
    
    // else, start a new load
    else {
        Machine.GetById(id).NewLoad(duration, curUser, curUserEmail, curUserRoom);
        
        // send response back to client: 
        res.send({ msg: 'success' });
    }
});

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
                userEmail: user.email,
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

// Machine.GetById(1).NewLoad(60, "Bob", "https.net", 5000);
// Machine.GetById(2).NewLoad(60, "Bill", "https.net", 3000);
// Machine.GetById(3).NewLoad(60, "Boe", "https.net", 2000);


// console.log(Machine.GetById(1).curUser, Machine.GetById(1).setTime, Machine.GetById(1).startTime);