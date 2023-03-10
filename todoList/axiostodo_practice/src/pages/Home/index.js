import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexCenter } from '../../styles/common';
import LoginForm from './components/Form/Login/Login';
import SignUpForm from './components/Form/SignUp/SignUp';

function HomePage() {
  const [form, setForm] = useState('login');

  const onFormChnage = (e) => {
    const { innerText } = e.target;
    setForm(innerText.toLowerCase());
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.LoginSelector mode={form} onClick={onFormChnage}>
          LOGIN
        </S.LoginSelector>
        <S.SignUpSelector mode={form} onClick={onFormChnage}>
          SIGN
        </S.SignUpSelector>
      </S.Header>
      {form === 'login' ? <LoginForm /> : <SignUpForm setForm={setForm} />}
    </S.Wrapper>
  );
}
export default HomePage;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter}
  flex-direction: column;
`;

const Header = styled.header`
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};
  width: 360px;
  height: 48px;
  position: relative;
  display: flex;

  div {
    height: 100%;
    width: 50%;
    ${flexCenter}
    cursor: pointer;

    :hover {
      background-color: #e0e0e0;
    }
  }
`;

const LoginSelector = styled.div`
  background-color: ${({ mode }) => (mode === 'login' ? '#e0e0e0' : '#f5f5f5')};
`;

const SignUpSelector = styled.div`
  background-color: ${({ mode }) => (mode === 'sign' ? '#e0e0e0' : '#f5f5f5')};
`;

const S = {
  Wrapper,
  Header,
  LoginSelector,
  SignUpSelector,
};

/*
[로그인 시 프론트엔드가 해야 할 일]
(다음페이지 이동/보안/에러 핸들)
1. 로그인 정보 확인을 위한 로그인 유무를 파악
2. 로그인 유무를 가지고 접근 가능한 페이지와 불가한 페이지 분리 [로그인 접근권한]
[access_token 인증방식]
* 로그인한 사용자의 userIDX가 노출되면 안됨 (보안에 치명적)
* 프로트에서 로그인 시 userIDX와 무관한 고유 키 값을 백엔드에게 전달하면, 백엔드는 키 값을 해석해서 userIDX를 확인함 [session방법]
* session보다는 access_token을 주로 사용함 
* 사용자가 로그인을 하면 백엔드가 access_token을 줌. 프론트엔드에서 로그인 유무를 구별 해야 할 때마다 이 access_token을 전달하여 백엔드가 사용자의 고유 정보를 확인하게 함.
* jwt : 가장 잘 쓰이는 access_token 방식
* access_token도 노출될 위험이 있어 30분에 한번씩 재발급됨. (refresh_token : 1~2주 유지)
*/
