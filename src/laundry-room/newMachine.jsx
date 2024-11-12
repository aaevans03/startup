import React from "react";

import { NewTimer } from "./newTimer";

export function NewMachine({ curState, timerDisplay }) {
    
    return (
        <td className="open">
            { curState }
            <br />
            { timerDisplay }
        </td>
    );
}