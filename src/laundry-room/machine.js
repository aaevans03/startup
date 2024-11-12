import { TimerFunction } from "./timerjs.js";
export class Machine {

    static registry = {};
    
    constructor(id, curState, timeLeft, curUser) {
        this.id = id;
        this.curState = curState;
        this.timeLeft = timeLeft;
        this.curUser = curUser;
        this.isRunning = false;
        Machine.registry[id] = this;
    };

    GetById(id) {
        return Machine.registry[id];
    }

    async NewLoad(id, duration, curUser) {
        // call the Timer function in JS

        this.curState = "in use";
        this.isRunning = true;
        
        await TimerFunction(5, ((a) => console.log(a)));

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

const Machine1 = new Machine(0, "open", 30, "me");

// console.log(Machine1);

// Machine1.curState = "in use";

// console.log(Machine1);

// Machine1.curState = "out of order";

// console.log(Machine1);

// Machine1.InUse;

console.log(Machine1);

Machine1.NewLoad(1, 5, "alex");