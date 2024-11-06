import React from 'react';
import "./laundry-room.css"

export function LaundryRoom() {
    return (
        <>
            <main>
                <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                    <symbol id="check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </symbol>
                    <symbol id="info-fill" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    </symbol>
                    <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </symbol>
                </svg>

                <div id="header-text">
                    <h2><u>Laundry Room - Building <span id="buildingNumber">4</span></u></h2>
                    <h3>Welcome, <span id="firstName">First Name</span></h3>
                </div>
                
                <div className="alert alert-success d-flex align-items-center alert-dismissible fade show" role="alert">
                    <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
                    <div>
                        <b>Reminder:</b> your load in <b>Dryer <span id="userMachineNumber">2</span></b> is finished.
                    </div>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>


                {/* Bootstrap button trigger modals */}
                <div className="top-buttons">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#view-statistics">
                        View Statistics
                    </button>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#new-load">
                        New Load
                    </button>
                </div>
                
                
                {/* Bootstrap modal for viewing statistics */}
                <div className="modal fade" id="view-statistics" tabindex="-1" aria-labelledby="viewStatistics" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered view-stats">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h1 className="modal-title fs-5" id="viewStatistics">Statistics for building <span id="buildingNumber">4</span></h1>
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
                                    <img width="500px" style={{border: "1px solid"}} src="/images/sample_loads.svg" alt="Bar graph with laundry times" />
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
                <div className="modal fade" id="new-load" tabindex="-1" aria-labelledby="newLoad" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered new-load">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h1 className="modal-title fs-5" id="newLoad">Enter in a new laundry load</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form id="add-load" method="get">
                                    <div className="radials">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" id="washer" name="load-type" val="Washer" checked />
                                            <label for="washer">Washer</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" id="dryer" name="load-type" val="Dryer" />
                                            <label for="dryer">Dryer</label>
                                        </div>
                                    </div>

                                    <div id="input-time">
                                        <div>
                                            <input type="number" className="form-control form-check-inline laundry-room-form" id="machine-number" min="1" max="16" placeholder="Machine Number (1-16)" />
                                        </div>
                                        <div>
                                            <input type="number" className="form-control form-check-inline laundry-room-form" id="load-length" min="20" max="60" placeholder="Length of Load (20-60 minutes)"/>
                                        </div>
                                    </div>
                                    

                                    <div className="alert alert-warning d-flex align-items-center" role="alert">
                                        
                                        <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                                        <div>
                                            The laundry room is currently experiencing heavier usage than normal, you are #<span id="queueNumber">3</span> in the queue.
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="machines">

                    {/* <!-- The interface where you see at a glace which machines are being used, and later you can select them to view more information --> */}
                    <table className="washers" id="washers">
                        <tbody>
                            <tr>
                                <td className="numbering washer-numbering">1</td>
                                <td className="in-use">in use <span className="machine-time">23:29</span></td>
                            </tr>
                            <tr>
                                <td className="numbering washer-numbering">2</td>
                                <td className="in-use">in use <span className="machine-time">31:34</span></td>
                            </tr>
                            <tr>
                                <td className="numbering washer-numbering">3</td>
                                <td className="out-of-order">out of order<span className="machine-time"></span></td>
                            </tr>
                            <tr>
                                <td className="numbering washer-numbering">4</td>
                                <td className="open-machine">open<span className="machine-time"></span></td>
                            </tr>
                            <tr>
                                <td className="numbering washer-numbering">5</td>
                                <td className="open-machine">open<span className="machine-time"></span></td>
                            </tr>
                            <tr>
                                <td className="numbering washer-numbering">6</td>
                                <td className="open-machine">open<span className="machine-time"></span></td>
                            </tr>
                            <tr>
                                <td className="numbering washer-numbering currently-viewing">7</td>
                                <td className="in-use currently-viewing">in use <span className="machine-time">33:21</span></td>
                            </tr>
                            <tr>
                                <td className="numbering washer-numbering">8</td>
                                <td className="in-use">in use <span className="machine-time">12:42</span></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="dryers-and-timer">

                        <div>

                            <table className="dryers" id="dryers">
                                <tbody>
                                    <tr>
                                        <td className="numbering dryer-numbering">1</td>
                                        <td className="numbering dryer-numbering">2</td>
                                        <td className="numbering dryer-numbering">3</td>
                                        <td className="numbering dryer-numbering">4</td>
                                    </tr>
                                    <tr>
                                        <td className="in-use">in use <span className="machine-time">1:13</span></td>
                                        <td className="load-done">done <span className="machine-time">0:00</span></td>
                                        <td className="out-of-order">out of order<span className="machine-time"></span></td>
                                        <td className="open-machine">open<span className="machine-time"></span></td>
                                    </tr>
                                    <tr>
                                        <td className="numbering dryer-numbering">5</td>
                                        <td className="numbering dryer-numbering">6</td>
                                        <td className="numbering dryer-numbering">7</td>
                                        <td className="numbering dryer-numbering">8</td>
                                    </tr>
                                    <tr>
                                        <td className="open-machine">open<span className="machine-time"></span></td>
                                        <td className="open-machine">open<span className="machine-time"></span></td>
                                        <td className="in-use">in use <span className="machine-time">32:34</span></td>
                                        <td className="in-use">in use <span className="machine-time">21:42</span></td>
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
            </main>
            

        </>
    );
}