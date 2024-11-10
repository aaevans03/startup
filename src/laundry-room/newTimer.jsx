import React from "react";

export function NewTimer({ id }) {

    console.log(id);

    return (
        <>{id.timeLeft}</>
    );

    

}