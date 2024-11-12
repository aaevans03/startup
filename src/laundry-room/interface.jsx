import React from "react";

import { Machine } from "./machine.jsx"
import { NewMachine } from "./newMachine.jsx"

export function Interface({  }) {


    // store all the data for the machines in here. we'll pass them up through functions.
    
    // each machine should store an ID, currentState, timeLeft, and currentUser.
    
    
    return (
        <div className="machines">

            {/* <!-- The interface where you see at a glace which machines are being used, and later you can select them to view more information --> */}
            <table className="washers" id="washers">
                <tbody>
                    <tr>
                        <td className="numbering washer-numbering">1</td>
                        <NewMachine
                            
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">2</td>
                        <Machine
                            
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">3</td>
                        <Machine
                            
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">4</td>
                        <Machine
                            
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">5</td>
                        <Machine
                            
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">6</td>
                        <Machine
                            
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering currently-viewing">7</td>
                        <Machine
                            
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">8</td>
                        <Machine
                            
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
                                    
                                />
                                <Machine
                                    
                                />
                                <Machine
                                    
                                />
                                <Machine
                                    
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
                                    
                                />
                                <Machine
                                    
                                />
                                <Machine
                                    
                                />
                                <Machine
                                    
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