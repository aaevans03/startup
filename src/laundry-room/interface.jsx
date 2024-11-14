import React from "react";

import { Machine } from './machine.js';

import { NewMachine } from "./newMachine.jsx"
import { MachineViewer } from "./machine-viewer.jsx";

export function Interface({ userRoomNumber }) {

    const [currentlyViewing, setCurrentlyViewing] = React.useState(1);
    
    return (
        <div className="machines">

            {/* <!-- The interface where you see at a glace which machines are being used, and later you can select them to view more information --> */}

            <table className="washers" id="washers">
                <tbody>
                    <tr>
                        <td className="numbering washer-numbering">1</td>
                        <NewMachine
                            machineObj={ Machine.GetById(1) }
                            setAsCurrentlyViewing={
                                () => {
                                    setCurrentlyViewing(1);
                                }
                            }
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">2</td>
                        <NewMachine
                            machineObj={ Machine.GetById(2) }
                            setAsCurrentlyViewing={
                                () => {
                                    setCurrentlyViewing(2);
                                }
                            }
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">3</td>
                        <NewMachine
                            machineObj={ Machine.GetById(3) }
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">4</td>
                        <NewMachine
                            machineObj={ Machine.GetById(4) }
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">5</td>
                        <NewMachine
                            machineObj={ Machine.GetById(5) }
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">6</td>
                        <NewMachine
                            machineObj={ Machine.GetById(6) }
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering currently-viewing">7</td>
                        <NewMachine
                            machineObj={ Machine.GetById(7) }
                        />
                    </tr>
                    <tr>
                        <td className="numbering washer-numbering">8</td>
                        <NewMachine
                            machineObj={ Machine.GetById(8) }
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
                                <NewMachine
                                    machineObj={ Machine.GetById(10) }
                                />
                                <NewMachine
                                    machineObj={ Machine.GetById(12) }
                                />
                                <NewMachine
                                    machineObj={ Machine.GetById(14) }
                                />
                                <NewMachine
                                    machineObj={ Machine.GetById(16) }
                                />
                                
                            </tr>
                            <tr>
                                <td className="numbering dryer-numbering">9</td>
                                <td className="numbering dryer-numbering">11</td>
                                <td className="numbering dryer-numbering">13</td>
                                <td className="numbering dryer-numbering">15</td>
                            </tr>
                            <tr>
                                <NewMachine
                                    machineObj={ Machine.GetById(9) }
                                />
                                <NewMachine
                                    machineObj={ Machine.GetById(11) }
                                />
                                <NewMachine
                                    machineObj={ Machine.GetById(13) }
                                />
                                <NewMachine
                                    machineObj={ Machine.GetById(15) }
                                />
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            
            
                {/* <!-- The machine you have currently selected --> */}
                
                <MachineViewer
                    currentlyViewing={currentlyViewing}
                    userRoomNumber={userRoomNumber}
                />

            </div>

        </div>
    );
}