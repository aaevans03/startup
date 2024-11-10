import React from 'react';
import "./laundry-room.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

import { NewLoad } from './new-load.jsx';
import { Interface } from './interface.jsx';

export function LaundryRoom(props) {

    const [userSubmittedData, setUserSubmittedData] = React.useState("");
    

    

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
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#view-statistics">
                        View Statistics
                    </button>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#new-load">
                        New Load
                    </button>
                </div>

                <NewLoad 
                    onSubmit={(data) => setUserSubmittedData(data)}
                />
                
                
                {/* Bootstrap modal for viewing statistics */}
                <div className="modal fade" id="view-statistics" tabIndex="-1" aria-labelledby="viewStatistics" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered view-stats">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h1 className="modal-title fs-5" id="viewStatistics">Statistics for building {props.userBuildingNumber}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label for="day-of-week">Select day of week to view: </label>
                                <select className="form-select" id="day-of-week" name="sel-day-of-week">
                                    <option>Sunday</option>
                                    <option>Monday</option>
                                    <option>Tuesday</option>
                                    <option selected>Wednesday</option>
                                    <option>Thursday</option>
                                    <option>Friday</option>
                                    <option>Saturday</option>
                                </select>
                                
                                <br />
                                <br />
                                
                                <p>The busiest time in the laundry room <span id="day-of-week"><b>last Wednesday</b></span> was around <span id="time-of-day"><b>9 PM</b></span>.</p>
                                
                                <div>
                                    <img width="500px" style={{border: "1px solid"}} src="./sample_loads.svg" alt="Bar graph with laundry times" />
                                </div>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                            {/* <!-- <button type="button" className="btn btn-primary">Close</button> --> */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Bootstrap modal for adding a new load --> */}
                
                <Interface />
                
            </main>
            

        </>
    );
}