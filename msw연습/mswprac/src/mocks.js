// msw 적용 예시

import { setupWorker, rest } from "msw";

const worker = setupWorker(
    rest.post('/login', (req, res, ctx) => {
        const isAuthenticated = sessionStorage.getItem('username')

        if (!isAuthenticated) {
            return res(
                ctx.status(403),
                ctx.json({
                    errorMessage: 'Not authenticated',
                }),
            )
        }

        return res(
            ctx.json({
                firstName: 'John',
            }),
        )
    }),
)

// 위에 작성한 내용 service worker 등록 & mocking 실행(?)
worker.start()

/*  
핸들러 함수(res.post()) => 첫번째 인자: 경로 / 두번째 인자: response resolver라는 콜백함수

response resolver에는 세 가지 인자를 받음
req: 매칭되는 요청에 대한 정보
res: 모의 응답을 만들 수 있는 유틸리티
ctx: 모의 응답의 http 상태 코드, 헤더, 바디 등을 만들 수 있는 함수들

*/