import React from 'react';

import { Timer } from "./timer";

export function Machine({ machineId }) {

    const [usageState, setUsageState] = React.useState("done");
    const [machineClassName, setMachineClassName] = React.useState("open");

    // later, pass in duration of load from laundry-room when user inputs a load

    function ChangeMachineClassName() {
         if (usageState === "in use") {
            setMachineClassName("in-use");
         }
         else if (usageState === "done") {
            setMachineClassName("done");
         }
         else if (usageState === "open") {
            setMachineClassName("open");
         }
         else if (usageState === "out of order") {
            setMachineClassName("out-of-order");
         }
    }

    // update color of machines every time usageState is updated
    React.useEffect(() => {
        ChangeMachineClassName();
    }, [usageState]);

    // a machine has a few states: open, in use, done, out of order.

    // if 

    // child functions: set timer
    // 


    return (
        <td className={machineClassName}>
            {usageState}
            <br />
            
            <Timer
                userDuration={10}
                setUsageState={setUsageState}
                machineId = {machineId}
            />
        </td>
    );
}