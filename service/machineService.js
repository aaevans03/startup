class Machine {

    static registry = {};
    
    constructor(id) {
        // id of the machine in question
        this.id = id;

        // current user of the machine
        this.curUser = "none";

        // this is how much time was set in by the user (milliseconds)
        this.setTime = 0;

        // Date object of when a load was started
        this.startTime = null;

        // machine registry
        Machine.registry[id] = this;
    };

    static GetById(id) {
        return Machine.registry[id];
    }

    async NewLoad(duration, curUser) {
        // call the Timer function in JS

        // calculate number of milliseconds for duration
            // the duration should be in seconds. multiply it by 1000 for ms
        this.setTime = duration * 1000;

        let d = new Date(Date.now());

        this.startTime = d.getTime();

        this.curUser = curUser;

        await TimerFunction(duration);

        // console.log("done");
        
        // reset the machine back to open after a certain amount of time
        setTimeout(() => {
            this.curUser = "none";
            this.setTime = 0;
            this.startTime = null;

        }, 300000);
    };

};

async function TimerFunction(duration) {

    const TimerPromise = new Promise((resolve, reject) => {

        // initialize new variables
        let startTime = Date.now();
        let difference;

        // the timer function: update timer every 1 second
        const timer = setInterval(() => {

            // get the difference of the total duration and the time left
            difference = duration - Math.floor((Date.now() - startTime) / 1000);
            
            console.log(difference, "seconds");

            // when the timer is done
            if (difference <= 0) {

                clearInterval(timer);

                console.log("timer done");

                resolve();
                
            }

        }, 1000);

    });

    return TimerPromise;
    
};

module.exports = Machine;