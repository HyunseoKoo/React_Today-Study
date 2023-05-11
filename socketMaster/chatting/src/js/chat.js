// 12. src > js > chat.js 파일 생성 후 socket io 부르기

"use strict"; // 자바스크립트의 에러를 최대한 줄이기 위한 코드


console.log(io);
const socket = io();  // io() => socket의 클라이언트를 부르는 것 

console.log(socket);