
async function TimerFunction(duration) {

    const TimerPromise = new Promise((resolve, reject) => {

        // initialize new variables
        let startTime = Date.now();
        let difference;


        // the timer function: use setInterval to make the clock change every 1 second
        const timer = setInterval(() => {

            // get the difference of the total duration and the time left
            difference = duration - Math.floor((Date.now() - startTime) / 1000);

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