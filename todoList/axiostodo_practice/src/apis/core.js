// 백엔드API 주소 모듈화
// 장점: 유지보수 용이. url 주소 변경이 필요한 경우 모듈화한 파일에서 관리하면 해당 주소를 사용하고 있는 모든 컴포넌트의 주소 변경이 원큐에 적용되기에 편리하다. [단일책임원칙]
// 모듈화 고려 부분? 왜 모듈화하는지 이유와, 어떠한 컴포넌트/기능들이 재사용될 수 있는지 고려

import axios from 'axios';

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
