// webSocket도 event가 있고, event가 발동될 때 사용할 function(콜백함수)를 만들면 됨!
// function fn(e) {
//     //
// }
// form.addEventListener("submit", fn)

// 여기 frontend에서 backend로 메세지를 보낼수 있음
const socket = new WebSocket(`ws://${window.location.host}`);

/*
server.js의 socket은 연결된 브라우저를 뜻하는 반면,
app.js의 socket은 서버로의 연결을 뜻함
*/

socket.addEventListener("open", () => {
    console.log("Connected to Server ✔")
});

socket.addEventListener("message", (message) => {
    console.log("New message: ", message.data)
});

socket.addEventListener("close", () => {
    console.log("Disconnected from Server 🖐️")
});

setTimeout(() => {
    socket.send("hello from the browser!");
}, 10000);