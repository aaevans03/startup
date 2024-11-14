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
        Machine.registry[id] = this;
    };

    static GetById(id) {
        return Machine.registry[id];
    }

    async NewLoad(duration, curUser, curUserRoom) {
        // call the Timer function in JS

        this.isRunning = true;

        console.log("Now starting a " + duration + " long load in machine " + this.id)

        this.timeLeft = duration + ":00";
        this.curState = "in use";
        this.curUser = curUser;
        this.curUserRoom = curUserRoom;

        console.log("the state of this machine is " + this.curState);
        console.log(this);
        
        await TimerFunction(duration, ((a) => {
            console.log(a);
            this.timeLeft = a
            // console.log(this.timeLeft);
        }));

        // console.log(this);
        // console.log("done");
        
        this.curState = "done";
        
        
        // reset the machine back to open after a certain amount of time
        setTimeout(() => {
            this.curState = "open";
            this.curUser = "none";
            this.curUserRoom = "N/A";
            this.timeLeft = null;
            // delete timer display
            this.isRunning = false;
        }, 120000);
        
        // console.log(this);

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