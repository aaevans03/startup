import React from "react";

export function Timer({ userDuration, setUsageState, machineId }) {

    const [timerDisplay, setTimerDisplay] = React.useState("0");
    const [isTimerRunning, setIsTimerRunning] = React.useState(false);
    const [duration, setDuration] = React.useState(userDuration);
    const [remainingTime, setRemainingTime] = React.useState(null);

    function ResetMachine() {
        setUsageState("open");
        setTimerDisplay("");
    }

    React.useEffect(() => {

        // Don't start the timer if it's not supposed to run
        if (!isTimerRunning) return;
        
        // initialize new variables
        let startTime = Date.now();
        let difference, minutes, seconds;

        // set the machine as in use
        setUsageState("in use");

        // the timer function: use setInterval to make the clock change every 1 second
        const timer = setInterval(() => {

            // get the difference of the total duration and the time left
            difference = duration - Math.floor((Date.now() - startTime) / 1000);

            // calculate minutes and seconds for display
            minutes = Math.floor(difference / 60);
            seconds = difference % 60;

            // add a 0 to the front of seconds if it's single digits
            seconds = seconds < 10 ? "0" + seconds : seconds;
        
            setTimerDisplay(`${minutes}:${seconds}`);

            // later: save timer information on the backend, so it doesn't get lost.

            // when the timer is done
            if (difference <= 0) {

                clearInterval(timer);

                // Update the state to stop the timer
                setIsTimerRunning(false);

                setUsageState("done");

                // reset the machine back to open after a certain amount of time
                setTimeout(ResetMachine, 120000)
            }

        }, 1000);

        // Cleanup the interval when the component unmounts or if the timer stops
        return () => clearInterval(timer);

    }, [isTimerRunning, duration]);

    function startTimer() {
        setIsTimerRunning(true);
    }

    return <span onClick={startTimer}>{timerDisplay}</span>;

}