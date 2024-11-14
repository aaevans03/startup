import React from 'react';
import "./laundry-room.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Machine } from './machine.js';

import { NewLoad } from './new-load.jsx';
import { Interface } from './interface.jsx';
import { StatsViewer } from './view-stats.jsx';

export function LaundryRoom(props) {

    const machinesArray = [];
    for (let i = 0; i <= 16; i++) {
        machinesArray.push(new Machine(i));
    }

    // const machine2 = Machine.GetById(1);
    // console.log(machine2);

    /*
    const machinesArray = [];
    for (let i = 1; i <= 17; i++) {
        machinesArray.push({
            id: (i-1),
            curState: "open",
            timeLeft: 0,
            curUser: ""
        });
    }
    machinesArray[0] = {id: null, curState: null, timeLeft: null, curUser: null};
    */

    // Function to update a specific machine's state

    return (
        <>
            <main>

                <div id="header-text">
                    <h2><u>Laundry Room - Building {props.userBuildingNumber}</u></h2>
                    <h3>Welcome, {props.userName}</h3>
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
                    submitLoad={(id, time) => Machine.GetById(id).NewLoad(time)}
                    // submitLoad={(id, time) => console.log(id, time)}
                />
                
                <Interface
                    machinesArray={machinesArray}
                />
                
            </main>
            

        </>
    );
}