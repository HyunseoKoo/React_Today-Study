// 로그인/회원가입 시 백엔드 주소에서 받아올 데이터 관련 axios 관심사를 AuthApi라는 객체 내 메서드로 각 비즈니스 로직에서 분리 [여러 컴포넌트에서 재사용 가능]

import { Axios } from './core';

const PATH = '/user';

const AuthApi = {
  // 객체 안의 함수 "메서드"
  // 메서드1
  async login(email, password) {
    const res = await Axios.post(PATH + '/login', { email, password });
    return res.data;
  },

  // 메서드2
  signup(email, password) {
    return Axios.post(PATH + '/sign', { email, password });
  },
};
export default AuthApi;
