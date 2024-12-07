import React from 'react';
import "./laundry-room.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Machine } from './machine.js';

import { NewLoad } from './new-load.jsx';
import { Interface } from './interface.jsx';
import { StatsViewer } from './view-stats.jsx';

export function LaundryRoom(props) {

    const [isLoading, setIsLoading] = React.useState(true);

    // stuff that runs on page load
    const machinesArray = [];
    for (let i = 0; i <= 16; i++) {
        machinesArray.push(new Machine(i));
    }
    
    React.useEffect(() => {

        fetchBackendLaundryData();

    }, []);

    function fetchBackendLaundryData() {
        // fetch machine states from API
        // console.log("———————————————————————"); 
        // console.log("fetching the data");

        fetch('/api/machines/getloads')
            .then((response) => response.json())
            .then((machineFetchedData) => {
                // console.log("data fetched"); 
                // console.log(machineFetchedData);

                // import the machineFetchedData (JSON file) into the frontend machinesArray
                let parsedData = JSON.parse(machineFetchedData);

                // for each machine, get the time left and calculate the timer display for the frontend.
                for (let i = 0; i < 16; i++) {

                    // calculated using the Date the load started, and how long the load should be in milliseconds.
                        // Subtract the load started date from the date now, you see how much time has passed.
                        // Then, subtract that time from what the load time should be, and you get your time left to import into your frontend. 
                    
                    // console.log(parsedData[i].id);
                    // console.log(parsedData[i].curUser);
                    // console.log(parsedData[i].setTime);
                    // console.log(parsedData[i].startDate);
                    // console.log(parsedData[i].isDisabled);

                    let id = parsedData[i].id;
                    let curUser = parsedData[i].curUser;
                    let setTime = parsedData[i].setTime;        // milliseconds!
                    let startDate = parsedData[i].startDate;    // milliseconds!

                    // calculate the time that should be left on the timer
                    let calculatedTimeLeft = (setTime / 1000) - (Math.floor((Date.now() - startDate) / 1000));

                    // if the timer is still running, then set a timer
                    if (calculatedTimeLeft > 0) {
                        // console.log("Timer is still running, the difference between the start date and now is", calculatedTimeLeft, "seconds");
                        // console.log("Timer has", calculatedTimeLeft, "seconds left");
                        
                        if (Machine.GetById(id).curState === "open") {
                            Machine.GetById(id).Reset();
                            Machine.GetById(id).NewLoad(calculatedTimeLeft, curUser, 4, props.userName, setTime / 1000);
                        }
                    }

                }

            })
            .catch((e) => {
                console.log(e);
            });
    }

    // ADD RANDOM USERS!!! WHEE!!!
    // start loads in random machines at random times
/*
    setInterval(() => {

        let chance = Math.random();

        let randomMachine = Math.floor(Math.random() * 16) + 1;

        let randomTime = (Math.floor(Math.random() * 21) + 20) * 60;

        let randomName = "Maddox";

        if (chance > 0.99) {
            randomName = "賴亞遜";
        }
        else if (chance > 0.9) {
            randomName = "John";
        }
        else if (chance > 0.8) {
            randomName = "Caleb";
        }
        else if (chance > 0.7) {
            randomName = "Phillip";
        }
        else if (chance > 0.6) {
            randomName = "Quinn";
        }
        else if (chance > 0.5) {
            randomName = "Christian";
        }

        if (chance > 0.5 && Machine.GetById(randomMachine).curState === "open") {    
            Machine.GetById(randomMachine).NewLoad(randomTime, randomName, 3102)
        }

        else {
            // console.log(randomName + " tried to start machine " + randomMachine + " but failed. He had a chance of " + chance);
        }

    }, 20000); */




    

    return (
        <>
            <main>
                {/* <button onClick={fetchBackendLaundryData}>Get new laundry data from backend</button> */}

                <div id="header-text">
                    <h2><u>Laundry Room - Building {props.userBuildingNumber}</u></h2>
                    <h3 id="username">Welcome, {props.userName}</h3>
                </div>
{/*                 
                <div className="alert alert-success d-flex align-items-center alert-dismissible fade show" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    <div>
                        <b>Reminder:</b> your load in <b>Dryer <span id="userMachineNumber">2</span></b> is finished.
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
 */}

                {/* Bootstrap button trigger modals */}
                <div className="top-buttons">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#view-statistics" disabled>
                        View Statistics (coming soon)
                    </button>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#new-load">
                        New Load
                    </button>
                </div>

                {/* Bootstrap modal for viewing statistics */}
                <StatsViewer />

                {/* <!-- Bootstrap modal for adding a new load --> */}
                <NewLoad 
                    machinesArray={machinesArray}
                    loggedInUser={props.userName}
                    loggedInUserRoom={props.userRoomNumber}
                    submitLoad={(id, time, curUser, curUserRoom) => Machine.GetById(id).NewLoad(time, curUser, curUserRoom, props.userName, time)}
                />
                
                <Interface/>
                
            </main>
            

        </>
    );
}