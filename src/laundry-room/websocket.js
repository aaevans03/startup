// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

let socketStatus = false;

// Display that we have opened the websocket
socket.onopen = (event) => {
    socketStatus = true;
    console.log("websocket has been opened");
    changeMsg("yes");
}

socket.onclose = (event) => {
    socketStatus = false;
    console.log("websocket has been closed");
    changeMsg("no");

}

export function sendMsg() {
    socket.send("hi");
}

// send a new load's data to the backend
export function sendNewLoad(duration, curUser, curUserRoom, loggedInUser, originalDuration) {
    const newLoadData = {
        duration: duration,
        curUser: curUser,
        curUserRoom: curUserRoom,
        loggedInUser: loggedInUser,
        originalDuration: originalDuration
    }
    socket.send(JSON.stringify(newLoadData));
}

// when a new load is detected, add it to the user's laundry interface
socket.onmessage = async (event) => {
    const rawData = await event.data.text();
    const loadData = JSON.parse(rawData);
    console.log(loadData);
};



export function changeMsg(msg) {

    const msgLocation = document.getElementById("websocket-status");
    if (!msg) {
        msgLocation.innerHTML = socketStatus;
    }
    
    msgLocation.innerHTML = (msg);

    // msgLocation.innerHTML = "yes";

}


