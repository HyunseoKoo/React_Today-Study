const express = require("express")
const http = require("http")       // 웹소켓으로 http 사용
const app = express();              // 3. app.js 파일 생성 후 express 라이브러리를 app이라는 변수에 담아둠
const path = require("path");       // 5. app.js에서 express 서버가 실행이 되면 보여줄 파일(폴더?) 주소를 지정해줌
const socketIO = require("socket.io");  // 8. socket io를 변수에 담아줌



// 5. app.js에서 express 서버가 실행이 되면 보여줄 파일(폴더?) 지정해줌
app.use(express.static(path.join(__dirname, "src")))  // static 폴더를 지정
const PORT = process.env.PORT || 5000;  // port가 있으면 그 port를 실행하거나 아님 5000번을 쓰거라!



// server.listen(포트, 명령)
const server = app.listen(PORT, ()=>console.log(`server is running ${PORT}`)); // 터미널에 node app.js 명령어로 확인

const io = socketIO(server, {
    cors: {
        origin: true,
        credential: true,
        methods: ["GET", "POST"]
    }
});    // 9. 소켓io가 server를 담을수 있게(???) 세팅

io.on("connect", (socket)=> {
    console.log('연결이 이루어 졌습니다!' +socket)
})    // 10. "connection"이 작동되면 명령이 실행되도록 io 설정