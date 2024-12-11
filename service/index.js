const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

const Machine = require('./machineService.js');

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// The users are saved in memory, and disappear whenever the service is restarted.
// *** moving this functionality to database.js ***
let users = {};
let machineUsageData = {};

// Storing machine states in the backend
const machinesArray = [];
for (let i = 1; i <= 16; i++) {
    machinesArray.push(new Machine(i));
}

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

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
    
    // if the user already exists in the database
    if (await DB.getUser(req.body.email)) {
        res.status(409).send({ msg: 'Existing user' });
    }

    else {
        // create a new user in the database
        const user = await DB.createUser(
            req.body.email,
            req.body.password,
            req.body.name,
            req.body.buildingNumber,
            req.body.roomNumber,
        );
        
        // Set the cookie
        setAuthCookie(res, user.token);
        
    
        res.send({
            id: user._id
        });
    }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.email);

    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {

            setAuthCookie(res, user.token);

            res.send({
                name: user.name,
                userEmail: user.email,
                buildingNumber: user.buildingNumber,
                roomNumber: user.roomNumber,
                id: user._id,
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
    res.clearCookie(authCookieName);
    res.status(204).end();
});

// secureApiRouter verifies credentials for endpoints that need authorization

// Return the application's default page if the path is unknown
app.use(express.static('public'));


// Laundry quotes service: fetch from a .json file
const quoteJson = require('./quotes.json');
apiRouter.get('/quotes', (req, res) => {
    const randomNum = Math.floor(Math.random() * 15) + 1;
    const randomQuote = quoteJson[randomNum];
    res.json(randomQuote);
});

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Machine.GetById(1).NewLoad(60, "Bob", "https.net", 5000);
// Machine.GetById(2).NewLoad(60, "Bill", "https.net", 3000);
// Machine.GetById(3).NewLoad(60, "Boe", "https.net", 2000);


// console.log(Machine.GetById(1).curUser, Machine.GetById(1).setTime, Machine.GetById(1).startTime);