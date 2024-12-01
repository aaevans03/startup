
async function TimerFunction(duration, timerDisplay) {

    const TimerPromise = new Promise((resolve, reject) => {

        // initialize new variables
        let startTime = Date.now();
        let difference, minutes, seconds;


        // the timer function: use setInterval to make the clock change every 1 second
        const timer = setInterval(() => {

            // get the difference of the total duration and the time left
            difference = duration - Math.floor((Date.now() - startTime) / 1000);

            // calculate minutes and seconds for display
            minutes = Math.floor(difference / 60);
            seconds = difference % 60;

            // add a 0 to the front of seconds if it's single digits
            seconds = seconds < 10 ? "0" + seconds : seconds;

            
        
            timerDisplay(`${minutes}:${seconds}`, (minutes * 60) + seconds);

            // later: save timer information on the backend, so it doesn't get lost.

            // when the timer is done
            if (difference <= 0) {

                clearInterval(timer);

                console.log("timer done");

                resolve();
                
            }

        }, 1000);

    });

    return TimerPromise;
    
}

module.exports = TimerFunction;