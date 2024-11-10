import React from "react";

import { Machine } from "./machine.jsx"

export function Interface({ machines }) {


    // store all the data for the machines in here. we'll pass them up through functions.
    
    // each machine should store an ID, currentState, timeLeft, and currentUser.

    return (
        <div className="machines">

            {/* <!-- The interface where you see at a glace which machines are being used, and later you can select them to view more information --> */}
            <table className="washers" id="washers">
                <tbody>
                    <tr>
                        <td className="numbering washer-numbering">{machines[1].id}</td>
                        <Machine
                            id=      {machines[1].id}
                            curState={machines[1].curState}
                            duration={machines[1].duration}
                            user=    {machines[1].curUser}
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">2</td>
                        <Machine
                            id=      {machines[2].id}
                            curState={machines[2].curState}
                            duration={machines[2].duration}
                            user=    {machines[2].curUser}
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">3</td>
                        <Machine
                            id=      {machines[3].id}
                            curState={machines[3].curState}
                            duration={machines[3].duration}
                            user=    {machines[3].curUser}
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">4</td>
                        <Machine
                            id=      {machines[4].id}
                            curState={machines[4].curState}
                            duration={machines[4].duration}
                            user=    {machines[4].curUser}
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">5</td>
                        <Machine
                            id=      {machines[5].id}
                            curState={machines[5].curState}
                            duration={machines[5].duration}
                            user=    {machines[5].curUser}
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">6</td>
                        <Machine
                            id=      {machines[6].id}
                            curState={machines[6].curState}
                            duration={machines[6].duration}
                            user=    {machines[6].curUser}
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering currently-viewing">7</td>
                        <Machine
                            id=      {machines[7].id}
                            curState={machines[7].curState}
                            duration={machines[7].duration}
                            user=    {machines[7].curUser}
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">8</td>
                        <Machine
                            id=      {machines[8].id}
                            curState={machines[8].curState}
                            duration={machines[8].duration}
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
                                    duration={machines[10].duration}
                                    user=    {machines[10].curUser}
                                />
                                <Machine
                                    id=      {machines[12].id}
                                    curState={machines[12].curState}
                                    duration={machines[12].duration}
                                    user=    {machines[12].curUser}
                                />
                                <Machine
                                    id=      {machines[14].id}
                                    curState={machines[14].curState}
                                    duration={machines[14].duration}
                                    user=    {machines[14].curUser}
                                />
                                <Machine
                                    id=      {machines[16].id}
                                    curState={machines[16].curState}
                                    duration={machines[16].duration}
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
                                    duration={machines[9].duration}
                                    user=    {machines[9].curUser}
                                />
                                <Machine
                                    id=      {machines[11].id}
                                    curState={machines[11].curState}
                                    duration={machines[11].duration}
                                    user=    {machines[11].curUser}
                                />
                                <Machine
                                    id=      {machines[13].id}
                                    curState={machines[13].curState}
                                    duration={machines[13].duration}
                                    user=    {machines[13].curUser}
                                />
                                <Machine
                                    id=      {machines[15].id}
                                    curState={machines[15].curState}
                                    duration={machines[15].duration}
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