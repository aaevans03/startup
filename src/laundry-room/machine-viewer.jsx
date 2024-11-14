import React from "react";
import { Machine } from "./machine";

export function MachineViewer({ currentlyViewing }) {

    const [currentTimer, setCurrentTimer] = React.useState("0:00");
    
    setInterval(() => {
        if (Machine.GetById(currentlyViewing).curState === "open") {
            setCurrentTimer("0:00");
        }

        else {
            setCurrentTimer(Machine.GetById(currentlyViewing).timeLeft)
        }
       
    }, 1000);



    return (
        <div className="current-machine">
            <h3>Currently Viewing: <span id="current-machine-number">Machine {currentlyViewing}</span></h3>
            <p><span>Current User: </span> <span id="current-user">{Machine.GetById(currentlyViewing).curUser}</span>, <span id="current-user-room">Room {Machine.GetById(currentlyViewing).curUserRoom}</span>
            </p>
            <h3>Time left: <span id="timeLeft">{Machine.GetById(currentlyViewing).timeLeft === null ? "0:00" : Machine.GetById(currentlyViewing).timeLeft}</span></h3>
            <div className="progress" role="progressbar" aria-label="Timer progress" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "20px"}}>
                <div className="progress-bar" style={{width: "25%"}}></div>
            </div>
            <p>Time done: <span id="timeDone">3:02pm</span></p>
            
        </div>
    );


}