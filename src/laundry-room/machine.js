import { TimerFunction } from "./timerjs.js";
export class Machine {

    static registry = {};
    
    constructor(id) {
        this.id = id;
        this.curState = "open";
        this.timeLeft = null;
        this.curUser = "none";
        this.curUserRoom = "N/A";
        this.isRunning = false;
        this.secondsLeft = 0;
        this.setTime = 0;
        this.originalDuration = 0;
        Machine.registry[id] = this;
    };

    static GetById(id) {
        return Machine.registry[id];
    }

    async NewLoad(duration, curUser, curUserRoom, loggedInUser, originalDuration) {
        // call the Timer function in JS

        this.isRunning = true;

        // console.log("Now starting a " + duration + " long load in machine " + this.id)

        // duration is in seconds
        this.setTime = duration;
        
        this.originalDuration = originalDuration;

        console.log("The original duration is", this.originalDuration);

        this.secondsLeft = duration;

        // GET TIME FOR THE TIMER DISPLAY
        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;

        // add a 0 to the front of seconds if it's single digits
        seconds = seconds < 10 ? "0" + seconds : seconds;

        this.timeLeft = `${minutes}:${seconds}`;

        
        this.curState = "in use";
        this.curUser = curUser;
        this.curUserRoom = curUserRoom;

        // console.log("the state of this machine is " + this.curState);
        // console.log(this);
        
        await TimerFunction(duration, ((timerDisplay, secondsLeft) => {

            // console.log(timerDisplay);

            this.timeLeft = timerDisplay;
            this.secondsLeft = secondsLeft;

            // console.log(this.timeLeft);
            // console.log(this.secondsLeft);
            
        }));

        // console.log(this);
        // console.log("done");
        
        this.curState = "done";

        this.timeLeft = "0:00";

        // send an alert
        if (curUser === loggedInUser) {
            alert(`Notice: Your load in Machine ${this.id} is finished.`)

            // change later to show custom Bootstrap notification?
        }
        
        
        // reset the machine back to open after a certain amount of time
        setTimeout(() => {
            this.curState = "open";
            this.curUser = "none";
            this.curUserRoom = "N/A";
            this.timeLeft = null;
            this.secondsLeft = 0;
            this.originalDuration = 0;
            this.setTime = 0;
            // delete timer display
            this.isRunning = false;

            

        }, 1000);
        
        // console.log(this);


    }

    AddStats() {
        
        // add stats to localStorage or database in the future. Store how much machines have been used over the past 7 days

        return;
        
    }

    Reset() {
        this.curState = "open";
        this.curUser = "none";
        this.curUserRoom = "N/A";
        this.timeLeft = null;
        this.secondsLeft = 0;
        this.setTime = 0;
        // delete timer display
        this.isRunning = false;
    }

};

// const Machine1 = new Machine(1, "open", 30, "me");

// console.log(Machine1);

// Machine1.curState = "in use";

// console.log(Machine1);

// Machine1.curState = "out of order";

// console.log(Machine1);

// Machine1.InUse;

// console.log(Machine1);

// Machine1.NewLoad(5, "alex");

// const machine1 = new Machine(1, "open");
// console.log(Machine.GetById(1));

// Machine.GetById(1).NewLoad(5);