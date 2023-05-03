import http from "http";
import WebSocket from 'ws';
import express from "express";

const app = express();

app.set("view engine", "pug");                                  // pug로 view engine을 설정하고, 
app.set("views", __dirname + "/views");                         // express에 template이 어디 있는지 지정해주고,
app.use("/public", express.static(__dirname + "/public"));      // public url을 생성해서 유저에게 파일을 공유해주고, 
app.get("/", (req, res) => res.render("home"));                 // home.pug를 render 해주는 route handler를 만들어 준 것!
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log('Listening on http://localhost:3000');
// app.listen(3000, handleListen);

// 이렇게 하면 같은 서버에서 http서버와 webSocket 서버 둘 다 돌릴 수 있음 (현재 2개가 같은 3000번 port에 있기를 유도해서 그렇지 이게 필수는 아님. ws서버만 만들어도 됨)
const server = http.createServer(app);              // http서버에 access 하려는 것  (http 서버가 필요한 이유는 views, static files, home, redirection을 원하기 때문!)
const wss = new WebSocket.Server({ server });       // http서버 위에 webSocket 서버를 만든 것

// 백엔드에 연결된 사람의 정보를 제공해줌 (그게 여기 socket에서 제공되는 것 => socket은 서버(나)와 브라우저 사이의 연결)
// 여기있는 socket이 frontend와 실시간으로 소통할 수 있음
wss.on("connection", (socket) => {
    console.log("Connected to Browser ✔");
    socket.on("close", () => console.log("Disconnected from the Browser 🖐️"));
    socket.on("message", (message) => {
        console.log(message);
    });
    socket.send("hello!!");
})

server.listen(3000, handleListen);

/*
    express로 할 일 ? view를 설정해주고 render 해주는 것!
    나머지는 websocket에서 실시간으로 일어날 예정!
*/


/*
nodemon은 우리의 프로젝트를 살펴보고 변경 사항이 있을 시 서버를 재시작해주는 프로그램! nodemon.json 파일 내용 아래와 같음.
{
    "ignore": ["src/public/*"],
    "exec": "babel-node src/server.js"
}
    유저한테만 보여지는 프론트엔드에 사용되는 app.js를 저장할 때마다 nodemon이 새로 시작되고 있는데, view나 서버를 수정할 때만 nodemon이 재시작되어야 함
    nodemon이 server.js 파일을 수정하거나 여기 있는 모든 자바스크립트 파일들이 수정될 때만 새로고침하도록 유도 => nodemon.json 파일에서 ignore 세팅

    서버를 재시작하는 대신에 babel-node를 실행하게 되는데, babel은 우리가 작성한 코드를 일반 NodeJS 코드로 컴파일 해주는데 그 작업을 src/server.js 파일에 해줌
*/


/*
여기 server.js 파일에서는 express를 import하고, express 어플리케이션을 구성하고,
여기에 view engine을 Pug로 설정하고, views 디렉토리가 설정되고,
public 파일들에 대해서도 똑같은 작업을 해줌 => public 파일들은 프론트엔드에서 구동되는 코드이고 아주 중요한 부분!
*/