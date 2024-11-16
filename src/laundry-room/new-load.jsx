import React from "react";

import { Machine } from "./machine";

export function NewLoad({ machinesArray, loggedInUser, loggedInUserRoom, submitLoad }) {

    const [userMachineNumber, setUserMachineNumber] = React.useState("");
    const [userMachineDuration, setUserMachineDuration] = React.useState("");

    const [errorMessage, setErrorMessage] = React.useState("hi");

    // const submitLoad = (e) => {

    //     e.preventDefault();
        
    //     console.log("You chose machine " + userMachineNumber + " for " + userMachineDuration + " minutes");
    //     // if machine is in use, you can't start it.
    //     // if all machines are being used, sit in queue. or wait till later.
        
    //     // close the window and activate the machine
        
    //     onSubmit({userMachineNumber, userMachineDuration});

    //     setUserMachineNumber("");
    //     setUserMachineDuration("");
    // }


    

    const sendLoad = (e) => {

        e.preventDefault();
        // console.log(machinesArray[userMachineNumber]);

        if (Machine.GetById(userMachineNumber).curState !== "open") {
            alert("Machine " + userMachineNumber + " is already in use. Please pick another one");
        }
        else {

            submitLoad(userMachineNumber, userMachineDuration * 60, loggedInUser, loggedInUserRoom);
            
            setUserMachineNumber("");
            setUserMachineDuration("");

        }
        
        
    }

    


    return (
        <div className="modal fade" id="new-load" aria-labelledby="newLoad" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered new-load">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h1 className="modal-title fs-5" id="newLoad">Enter in a new laundry load</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <form id="add-load" method="get" onSubmit={sendLoad}>

                                    <div id="input-time">
                                        <div>
                                            <input type="number" className="form-control form-check-inline laundry-room-form" id="machine-number" value={userMachineNumber} onChange={(e) => setUserMachineNumber(e.target.value)} min="1" max="16" placeholder="Machine Number (1-16)" />
                                        </div>
                                        <div>
                                            <input type="number" className="form-control form-check-inline laundry-room-form" id="load-length" value={userMachineDuration} onChange={(e) => setUserMachineDuration(e.target.value)} min="20" max="60" placeholder="Length of Load (20-60 minutes)"/>
                                        </div>
                                    </div>
                                    

                                    {/* <div className="alert alert-warning d-flex align-items-center" role="alert">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
                                        <div>
                                            The laundry room is currently experiencing heavier usage than normal, you are #<span id="queueNumber">3</span> in the queue.
                                        </div>
                                    </div> */}

                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal"
                                            disabled=
                                                {!userMachineNumber || !userMachineDuration || userMachineDuration > 60 || userMachineDuration < 20 || userMachineNumber < 1 || userMachineNumber > 16 || Machine.GetById(userMachineNumber).curState !== "open" || Machine.GetById(userMachineNumber).curState === "out of order"}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
);
}