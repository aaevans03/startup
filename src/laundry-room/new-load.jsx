import React from "react";
import { Modal } from "bootstrap";
import { Button } from "bootstrap";

import { Machine } from "./machine";

export function NewLoad({ machinesArray, loggedInUser, loggedInUserRoom, submitLoad }) {

    const [userMachineNumber, setUserMachineNumber] = React.useState("");
    const [userMachineDuration, setUserMachineDuration] = React.useState("");

    const [errorMessage, setErrorMessage] = React.useState(null);
    const [successMessage, setSuccessMessage] = React.useState(null);

    const sendLoad = async (e) => {

        e.preventDefault();

        let userMachineDurationSeconds = userMachineDuration * 60;
        
        const response = await fetch('/api/machines/submitload', {
            method: 'post',
            body: JSON.stringify({ id: userMachineNumber, duration: userMachineDurationSeconds, curUser: loggedInUser }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        // if it's successful in submitting a load, then do this
        if (response?.status === 200) {

            const body = await response.json();
            console.log(body.msg);

            submitLoad(userMachineNumber, userMachineDuration * 60, loggedInUser, loggedInUserRoom);
            
            // Reset fields in this modal
            setUserMachineNumber("");
            setUserMachineDuration("");   
            setSuccessMessage("Load successfully submitted!");
        }
        else {
            const body = await response.json();

            setErrorMessage(body.msg);
            
            return;
        }

    }

    React.useEffect(() => {
        setErrorMessage(null);

        setTimeout(() => {
            setSuccessMessage(null);

        }, 10000);

    }, [userMachineNumber, userMachineDuration]);


    return (
        <>
        
        <div className="modal fade" id="new-load">
            <div className="modal-dialog modal-dialog-centered new-load">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="newLoad">Enter in a new laundry load</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">

                        <div id="add-load">

                            <div id="input-time">
                                <div>
                                    <input type="number" className="form-control laundry-room-form" id="machine-number" value={userMachineNumber} onChange={(e) => setUserMachineNumber(e.target.value)} min="1" max="16" placeholder="Machine Number (1-16)" />
                                </div>
                                <div>
                                    <input type="number" className="form-control laundry-room-form" id="load-length" value={userMachineDuration} onChange={(e) => setUserMachineDuration(e.target.value)} min="20" max="60" placeholder="Length of Load (20-60 minutes)"/>
                                </div>
                            </div>
                            
                            <div id="laundry-error">{errorMessage}</div>
                            <div id="laundry-success">{successMessage}</div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary"
                                    disabled={ !userMachineNumber || !userMachineDuration || userMachineNumber > 16 || userMachineNumber < 1 || userMachineDuration < 20 || userMachineDuration > 60 }
                                    onClick={sendLoad}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
);
}