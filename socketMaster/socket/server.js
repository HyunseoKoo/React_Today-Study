// 1. 터미널 오픈해서 npm init 입력
// 2. npm install express ws 입력

// 3. 웹서버 만드는 코드

const express = require('express');
const app = express();

app.use("/", function(req, res) {
    res.sendFile(_dirname + '/index.html');
});

app.listen(8080);

// 5. 웹소켓 열기
const WebSocket = require('ws');

const socket = new WebSocket.Server({
    port: 8081
});

// 8. 웹소켓으로 오는 유저메세지 받는 코드
// .on => 이벤트리스너 역할
socket.on('connection', (ws, req) => {

    ws.on('message', (msg)=> {
        console.log('유저가보낸 메세지: ' +msg);
        ws.send('how are you?');    // 10. 웹소켓으로 서버 -> 유저 메세지 보내려면
    })
})

// 9. node server. js 실행 후 버튼 클릭


/*
ws 대신 socket.io 라이브러리 쓰면

- 연결 끊기면 자동재접속 기능
- 웹소켓 접속자마다 자동 id 부여
- 모든 웹소켓유저에게 전체 메세지 전송가능
- 웹소켓방을 생성가능
 */