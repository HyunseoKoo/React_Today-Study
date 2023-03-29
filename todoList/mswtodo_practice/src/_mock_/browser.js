import { setupWorker } from "msw";
import {handler} from './apis/handler'


export const worker = setupWorker(...handler)

// handle을 등록시켜주는것
// 여기까지하면 서비스 워커가 세팅된 것

/*
1. apis tpxld
2. handler로 apis의 데이터를 합쳐줌
3. setupWorker에 등록시켜줌
4. App.js에가서 worker.start() 세팅
5. msw를 등록
    npx msw init public 실행 => public 폴더에 mockServiceWorker.js 파일 생김
*/