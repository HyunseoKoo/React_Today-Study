import AuthApi from 'apis/authApi';
import axios from 'axios';
import Button from 'components/Button/Button';
import useInputs from 'hooks/useInputs';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../style';

function LoginForm() {
  const navigate = useNavigate();

  const [{ email, password }, onChangForm] = useInputs({
    email: '',
    password: '',
  });

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    // 백엔드 API 관심사분리 하기 전 코드
    //   try {
    //     /* env는 수정 후 서버를 종료 후 다시 빌드 해야함함 */
    //     const { data } = await axios.post(process.env.REACT_APP_BACKEND_URL + '/user/login', {email,password,});
    //     {data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}  => 비동기 통신으로 백엔드에서 받아온 데이터
    //     위에서 비구조분해할당한 {data} => {message: true, data: {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9~}}
    //     localStorage.setItem('access_token', data.data.token); // 로컬스토리지에 토큰을 저장
    //     if (localStorage.getItem('access_token')) {
    //       navigate('/todo'); // 비동기가 아님. 로컬스토리지에 access_token이 있다면(=로그인이 되었다면) navigate 실행
    //     }
    //   } catch (err) {
    //     console.error(err);
    //     alert('아이디와 비밀번호를 확인해주세요');
    //   }
    try {
      const res = await AuthApi.login(email, password);
      console.log(res);
      navigate('/todo');
    } catch (err) {
      console.error(err);
      alert('아이디와 비밀번호를 확인해주세요');
    }
  };

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
