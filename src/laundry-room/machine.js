import { TimerFunction } from "./timerjs.js";
export class Machine {

    static registry = {};
    
    constructor(id) {
        this.id = id;
        this.curState = "open";
        this.timeLeft = null;
        this.curUser = "";
        this.isRunning = false;
        Machine.registry[id] = this;
    };

    static GetById(id) {
        return Machine.registry[id];
    }

    async NewLoad(duration, curUser) {
        // call the Timer function in JS

        console.log("Now starting a " + duration + " long load in machine " + this.id)

        this.curState = "in use";
        this.isRunning = true;
        
        await TimerFunction(duration, ((a) => console.log(a)));

        console.log(this);
        console.log("done");
        
        this.curState = "done";
        
        
        // reset the machine back to open after a certain amount of time
        setTimeout(() => {
            this.curState = "open";
            // delete timer display
            this.isRunning = false;
        }, 120000);
        
        console.log(this);

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