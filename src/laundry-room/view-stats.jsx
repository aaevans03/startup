import React from "react";

export function StatsViewer() {

    return (
        <div className="modal fade" id="view-statistics" aria-labelledby="viewStatistics" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered view-stats">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="viewStatistics">Statistics for building _</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <label for="day-of-week">Select day of week to view: </label>
                        <select className="form-select" id="day-of-week" name="sel-day-of-week">
                            <option>Sunday</option>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
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
    );
}