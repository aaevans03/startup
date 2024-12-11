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



export function changeMsg(msg) {

    const msgLocation = document.getElementById("websocket-status");
    if (!msg) {
        msgLocation.innerHTML = socketStatus;
    }
    
    msgLocation.innerHTML = (msg);

    // msgLocation.innerHTML = "yes";

}


