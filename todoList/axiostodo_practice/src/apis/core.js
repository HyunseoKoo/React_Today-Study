// 백엔드API 주소 모듈화
// 장점: 유지보수 용이. url 스펠링 하나라도 변경될 경우 외부 모듈화로 정리한 파일에서 한번에 변경하면 전체가 반영되기 때문에 편리하다. [단일책임원칙]
// 모듈화 공부방법? 왜 모듈화하는지 이유와, 어떠한 컴포넌트/기능들이 재사용될 수 있는지 생각하기

import axios from 'axios';

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
