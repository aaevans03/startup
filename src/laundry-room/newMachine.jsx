import React from "react";

import { Machine } from './machine';

export function NewMachine({ machineObj, setAsCurrentlyViewing }) {

    const [machineTimer, setMachineTimer] = React.useState("");
    const [machineUsageState, setMachineUsageState] = React.useState(machineObj.curState);
    const [machineClassName, setMachineClassName] = React.useState("open");

    // console.log(machineObj.curState);

    function viewMe() {
        setAsCurrentlyViewing();
    }

    setInterval(() => {
        if (machineObj.curState == "in use" || "done") {
            
            // console.log("we in use now");
            setMachineTimer(machineObj.timeLeft);
            setMachineUsageState(machineObj.curState);
            // console.log(machineObj.timeLeft);
        }
    }, 1000);

    
    function ChangeMachineClassName() {
        if (machineUsageState === "in use") {
            setMachineClassName("in-use");
        }
        else if (machineUsageState === "done") {
            setMachineClassName("done");
        }
        else if (machineUsageState === "open") {
            setMachineClassName("open");
        }
        else if (machineUsageState === "out of order") {
            setMachineClassName("out-of-order");
        }
    }

    React.useEffect(ChangeMachineClassName, [machineUsageState]);


    
    return (
        <td className={machineClassName} onClick={viewMe}>
            { machineObj.curState }
            <br />
            { machineObj.timeLeft }
        </td>
    );
}