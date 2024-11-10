import React from "react";

import { Machine } from "./machine.jsx"
import { NewMachine } from "./newMachine.jsx"

export function Interface({ machines }) {


    // store all the data for the machines in here. we'll pass them up through functions.
    
    // each machine should store an ID, currentState, timeLeft, and currentUser.

    console.log(machines[1].id);
    console.log(machines[1].curState);
    console.log(machines[1].timeLeft);
    console.log(machines[1].curUser);
    
    
    return (
        <div className="machines">

            {/* <!-- The interface where you see at a glace which machines are being used, and later you can select them to view more information --> */}
            <table className="washers" id="washers">
                <tbody>
                    <tr>
                        <td className="numbering washer-numbering">1</td>
                        <NewMachine
                            id=      {machines[1].id}
                            curState={machines[1].curState}
                            timeLeft={machines[1].timeLeft}
                            curUser= {machines[1].curUser}
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">2</td>
                        <Machine
                            id=      {machines[2].id}
                            curState={machines[2].curState}
                            timeLeft={machines[2].timeLeft}
                            user=    {machines[2].curUser}
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">3</td>
                        <Machine
                            id=      {machines[3].id}
                            curState={machines[3].curState}
                            timeLeft={machines[3].timeLeft}
                            user=    {machines[3].curUser}
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">4</td>
                        <Machine
                            id=      {machines[4].id}
                            curState={machines[4].curState}
                            timeLeft={machines[4].timeLeft}
                            user=    {machines[4].curUser}
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">5</td>
                        <Machine
                            id=      {machines[5].id}
                            curState={machines[5].curState}
                            timeLeft={machines[5].timeLeft}
                            user=    {machines[5].curUser}
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">6</td>
                        <Machine
                            id=      {machines[6].id}
                            curState={machines[6].curState}
                            timeLeft={machines[6].timeLeft}
                            user=    {machines[6].curUser}
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering currently-viewing">7</td>
                        <Machine
                            id=      {machines[7].id}
                            curState={machines[7].curState}
                            timeLeft={machines[7].timeLeft}
                            user=    {machines[7].curUser}
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">8</td>
                        <Machine
                            id=      {machines[8].id}
                            curState={machines[8].curState}
                            timeLeft={machines[8].timeLeft}
                            user=    {machines[8].curUser}
                        />
                    </tr>
                </tbody>
            </table>


            <div className="dryers-and-timer">

                <div>

                    <table className="dryers" id="dryers">
                        <tbody>
                            <tr>
                                <td className="numbering dryer-numbering">10</td>
                                <td className="numbering dryer-numbering">12</td>
                                <td className="numbering dryer-numbering">14</td>
                                <td className="numbering dryer-numbering">16</td>
                            </tr>
                            <tr>
                                <Machine
                                    id=      {machines[10].id}
                                    curState={machines[10].curState}
                                    timeLeft={machines[10].timeLeft}
                                    user=    {machines[10].curUser}
                                />
                                <Machine
                                    id=      {machines[12].id}
                                    curState={machines[12].curState}
                                    timeLeft={machines[12].timeLeft}
                                    user=    {machines[12].curUser}
                                />
                                <Machine
                                    id=      {machines[14].id}
                                    curState={machines[14].curState}
                                    timeLeft={machines[14].timeLeft}
                                    user=    {machines[14].curUser}
                                />
                                <Machine
                                    id=      {machines[16].id}
                                    curState={machines[16].curState}
                                    timeLeft={machines[16].timeLeft}
                                    user=    {machines[16].curUser}
                                />
                            </tr>
                            <tr>
                                <td className="numbering dryer-numbering">9</td>
                                <td className="numbering dryer-numbering">11</td>
                                <td className="numbering dryer-numbering">13</td>
                                <td className="numbering dryer-numbering">15</td>
                            </tr>
                            <tr>
                            <Machine
                                    id=      {machines[9].id}
                                    curState={machines[9].curState}
                                    timeLeft={machines[9].timeLeft}
                                    user=    {machines[9].curUser}
                                />
                                <Machine
                                    id=      {machines[11].id}
                                    curState={machines[11].curState}
                                    timeLeft={machines[11].timeLeft}
                                    user=    {machines[11].curUser}
                                />
                                <Machine
                                    id=      {machines[13].id}
                                    curState={machines[13].curState}
                                    timeLeft={machines[13].timeLeft}
                                    user=    {machines[13].curUser}
                                />
                                <Machine
                                    id=      {machines[15].id}
                                    curState={machines[15].curState}
                                    timeLeft={machines[15].timeLeft}
                                    user=    {machines[15].curUser}
                                />
                            </tr>
                        </tbody>
                    </table>
                </div>
            
            
                {/* <!-- The machine you have currently selected --> */}
                <div className="current-machine">
                    <h3>Currently Viewing: <span id="current-machine-number">Machine 7</span></h3>
                    <p><span>Current User: </span> <span id="current-user">Alex Evans</span>, <span id="current-user-room">Room 1234</span>
                    </p>
                    <h3>Time left: <span id="timeLeft">33:21</span></h3>
                    <div className="progress" role="progressbar" aria-label="Timer progress" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{height: "20px"}}>
                        <div className="progress-bar" style={{width: "25%"}}></div>
                    </div>
                    <p>Time done: <span id="timeDone">3:02pm</span></p>
                    
                </div>

            </div>

        </div>
    );
}