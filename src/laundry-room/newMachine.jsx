import React from "react";

import { NewTimer } from "./newTimer";

export function NewMachine({ id, curState, timeLeft, curUser }) {

    console.log(id);
    console.log(curState);
    console.log(timeLeft);
    console.log(curUser);
    
    return (
        <td className="open">

            {id.curState}
            <br />
            {<NewTimer
                id={id}
            />}
        </td>
    );
}