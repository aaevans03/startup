import { parse } from 'uuid';
import { Machine } from './machine.js';

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
export function sendNewLoad(id, duration, curUser, curUserRoom, originalDuration) {
    const newLoadData = {
        id: id,
        duration: duration,
        curUser: curUser,
        curUserRoom: curUserRoom,
        originalDuration: originalDuration
    }
    socket.send(JSON.stringify(newLoadData));
}

// when a new load is detected, add it to the user's laundry interface
socket.onmessage = async (event) => {
    const rawData = await event.data.text();
    const parsedData = JSON.parse(rawData);
    console.log(parsedData);

    let id = parsedData.id;
    let duration = parsedData.duration;
    let curUser = parsedData.curUser;        // this is the user name
    let curUserRoom = parsedData.curUserRoom;// this is the user's room
    let setTime = parsedData.setTime;        // milliseconds!
    let originalDuration = parsedData.originalDuration;    // milliseconds!

    Machine.GetById(id).NewLoad(duration, curUser, curUserRoom, "unknown", originalDuration);
};



export function changeMsg(msg) {

    const msgLocation = document.getElementById("websocket-status");
    if (!msg) {
        msgLocation.innerHTML = socketStatus;
    }
    
    msgLocation.innerHTML = (msg);

    // msgLocation.innerHTML = "yes";

}


