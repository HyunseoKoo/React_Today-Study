import AuthApi from 'apis/authApi';
import axios from 'axios';
import Button from 'components/Button/Button';
import { useAuth } from 'context/auth';
import useInput from 'hooks/useInput';
import useInputs from 'hooks/useInputs';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TokenService from 'repository/TokenService';
import * as S from '../style';

function LoginForm() {
  const navigate = useNavigate();
  const auth = useAuth();
  const { state } = useLocation();

  const [{ email, password }, onChangForm] = useInputs({
    email: '',
    password: '',
  });

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      /* // env는 수정 후 반드시 서버 종료 후 다시 빌드(재실행) 해야함!!
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/user/login",   => process.env.REACT_BACKEND_URL 을 .env.local 파일에 지정해주었음.
        { email, password });
      // console.log(res);    // {data: {...}, status:200, statusText: 'OK', headers: AxiosHeaders, config: {...},...}
      
      // 웹 브라우저 내에는 저장소(로컬/세션)가 있고, 프론트엔드 개발자가 마음대로 관리할 수 있다!
      const { data } = res.data;    // res 구조분해 한것
      localStorage.setItem('access_token', data.token);   // 로컬저장소에 res값(객체) 중 access token 넣어준것
      if (localStorage.getItem('access_token")) {         // 로컬저장소에 access token이 있다면(로그인 정보가 있다는 것) todo페이지로 이동하라! 
        navigate("/todo");
      }
      */

      /*
      1. 관심사분리 axios를 하나의 service 파일로 만들 것
      2. axios.interceptor access_token을 넣어줄 것 (header)
      3. locked access_token이 없으면 todo 요청 불가
      4. 관심사분리 localstorage --> 하나의 service 파일로 만들 것
      5. error handleing, error boundary
      6. eslint, prettier
      7. suspense ==> skeleton UI
      */

      const { data: response } = await AuthApi.login(email, password);
      auth.login(response.token);
      // console.log('token', response.token); // data에 token이 담겨있음
      // 브라우저 웹스토리지 중 로컬스토리지에 토큰을 (키, 값)으로 저장하는 방법
      // 웹스토리지 관심사 분리

      // localStorage.setItem('access_token', response.token);

      // token == access_token [사용자 정보를 암호화 한 것]
      // access_token 값이 있다면 로그인이 된 것
      // 프론트엔드는 token 유무를 통해 로그인 유무 판단 (=> 로그인 유무를 통해 사용자에게 전달하는 데이터 및 화면 렌더링이 달라짐)
      /*
      [token을 저장하는 방법]
      1. 웹 스토리지 (로컬, 세션스토리지)
      2. state (redux-persist 사용하면 state 안사라지게 할 수 있음 -- 하지만 비추)
      3. refreshToken
         access_token은 어디에 저장하든 탈취 위험
         따라서 access_token이 탈취되어도 이 토큰에 기간을 설정해서 해커한테 제어권이 넘어가는 시간을 최소화

         access_token => 만료 => 사용자는 접근 권한 사라짐 => 프론트엔드 로그아웃 처리

         짧은 access_token 유지기간으로 자동 로그아웃되면 사용자가 불편해요! [로그인 로직]
         요청할 때 access_token --> refresh --> access_token 만료 (error)

         프론트엔드 ---> access_token 재발급 --> 다시 http request에 실어서 재요청
        
         1) 사용자가 로그인 성공하면 백엔드가 access_token[사용자정보_ID 고유번호를 암호화한 정보]과 refresh_token(쿠키로)을 발급
         2) 이후 브라우저에 전달된 token(로그인한 사람에게)을 브라우저 웹스토리지에 저장. 프론트엔드는 이 token을 request header에 실어서 백엔드에게 보냄
         3) 백엔드는 전달받은 token이 유효한지 체크, 유효하면 로그인상태 원상복구
            유효하지 않다면 백엔드가 브라우저로 error를 보내고, 프론트엔드에서 axios intercept를 통해 error를 intercept로 캐치한후, 다시 백엔드에게 refresh token을 보냄.
            그러면 백에드는 유효한 token을 프론트엔드에게 다시 보냄

         ** solid 원칙 / 의존성역전원칙 ????
         */
    } catch (err) {
      console.error(err);
      alert('아이디와 비밀번호를 확인해주세요');
    }
  };

  // access_token이 있다면 페이지 접근을 막고 메인 페이지로 이동
  // useEffect(() => {
  //   if (auth.accessToken) return navigate('/todo');
  // }, []);

  // 해당 로직은 필수가 아니라 어떻게 로그아웃 후 처리를 할 건지 설계에 따라 달라짐
  useEffect(() => {
    if (!auth.accessToken) return;
    if (!state) return navigate('/todo');
    navigate(state.from);
    console.log('##############################', state);
  }, [auth]);

  return (
    <S.Form onSubmit={onLoginSubmit}>
      <S.InputBox>
        <input placeholder="e-mail" name="email" onChange={onChangForm} />
        <span>이메일</span>
      </S.InputBox>
      <S.InputBox>
        <input type="password" placeholder="password" name="password" onChange={onChangForm} />
        <span>비밀번호</span>
      </S.InputBox>
      <Button variant={'primary'} size={'full'}>
        로그인
      </Button>
    </S.Form>
  );
}
export default LoginForm;
