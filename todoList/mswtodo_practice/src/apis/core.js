import axios from 'axios';
import { useAuth } from 'context/auth';
import TokenService from 'repository/TokenService';
import AuthApi from './authApi';

// 모든 컴포넌트에 사용할 axios API의 베이스 url 설정
export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true,
  // 프론트엔드 웹 스토리지의 쿠키를 백엔드 서버와 공유 가능
  // headers: {
  //   Authorization: `Bearer ${TokenService.getToken()}`, // TokenService.getToken()을 Bearer로 감싸서 보안화 한 것[표기하는 용도]. 주석처리하면 todo페이지의 todoList 아예 안 나옴.
  // },
});

// http message : 브라우저와 백엔드 간 통신할 때 요청하는 하나하나의 요소
// 브라우저 [interceptor]--요청--> 백엔드   : 백엔드에 요청 데이터 전달 전에 가로채기
// 브라우저 [interceptor]<--응답-- 백엔드   : 백엔드로부터 응답 데이터 받기 전에 가로채기
Axios.interceptors.request.use(
  // config 받아올 때 (에러가 없을 때)
  (config) => {
    // console.log(config);
    const access_token = TokenService.getToken();
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
      return config;
    }
    return config;
  },
  // error 있을 때 (access_token 만료되었을 때...?)
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  // config 되었을 때 (성공)
  (response) => {
    return response;
  },
  // error 있을 때
  async (error) => {
    const auth = useAuth();
    if (error.response.status === 401) {
      await AuthApi.logout();
      auth.logout();
    }

    const originalRequest = error.config; // 기존의 요청
    if (error.response.status === 403 && !originalRequest._retry) {
      // originalRequest의 retry가 false이면 아래 코드 실행!
      originalRequest._retry = true; // 재요청 했을 때는 true   [재요청 못함함]

      const res = await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/jwt`); // 재발급 받은 새로운 access_token을 부름름
      if (res.status === 200) {
        const token = res.data.data;
        TokenService.setToken(token);
        Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // header에 재발급 받은 access_token을 실어 보냄
        return Axios(originalRequest);
      }
      /* access_token 만료되어 백엔드가 error(에러 메시지를 통해_ex. 401,402)를 보내면 내 비즈니스 로직에 오기전에 중간에 [가로채기]인터셉트해서 refresh_token을 재발급받고, 가로챘던 요청을 헤더에 심어서 백엔드에 재요청.
         그리고 새로 받은 refresh_token을 내꺼(?) 에 싱크로나이제이션 해서 originalRequest에 저장(?) 
      const res = 백엔드에서 refresh token으로 access_token을 응답받는주소
                  axios.post("/jwtReFresh")

      1. refreshToken이 쿠키로 관리되고있다면
         보낼 필요가 없다. 백엔드와 프론트엔드 쿠키값을 공유할 수 있음 (위의 withCredentials: true)

      2. 로컬스토리지, 세션스토리지, 웹쿠키(공유하지 않는다는 전제)
         axios.post("/jwtReFresh", {
          refresh_token: RefreshTokenService.getToken();
         })

         ===> access_token이 전달될 것.
         const accessToken = res.data.token
         TokenServer.setToken(accessToken);

         Axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
         return Axios(originalRequest)
      */
    }
    return Promise.reject(error); // 위의 에러가 아니면 던져라!
  }
);

/* Axios의 다양한 기능 찾아보기
timeOut 
cancelToken
----------------------------------------------
msw mocking (service worker) => 가짜 api 만들기
----------------------------------------------
privateRoute (접근권한)
eslint, prettier, husky
redux - toolkit

내일 8시~10시 보강
*/
