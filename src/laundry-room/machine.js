export class Machine {

    static Open = "open";
    static InUse = "in use";
    static Done = "done";
    static OutOfOrder = "out of order";

    static registry = {};
    
    constructor(id, curState, timeLeft, curUser) {
        this.id = id;
        this.curState = curState;
        this.timeLeft = timeLeft;
        this.curUser = curUser;
        Machine.registry[id] = this;
    }

    static GetById(id) {
        return Machine.registry[id];
    }

    static NewLoad(min) {
        // call the Timer function in JS

        timeLeft = Timer(min);
    }

};

const Machine1 = new Machine(0, "open", 30, "me");

console.log(Machine.GetById(0));

Machine.GetById(0).curState = "in use";

console.log(Machine.GetById(0));

Machine1.curState = "out of order";

console.log(Machine1);