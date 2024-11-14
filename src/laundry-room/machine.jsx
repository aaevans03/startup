import React from 'react';

import { Timer } from './timer';

export function OldMachine({ id, curState, timeLeft, curUser }) {

    const [usageState, setUsageState] = React.useState(curState);
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

    
    return (
        <td className={machineClassName}>
            {usageState}
            <br />

            
            <Timer
                userDuration={10}   // time in minutes
                curDuration={timeLeft}
                setUsageState={setUsageState}
                machineId={id}
            />
        </td>
    );
}