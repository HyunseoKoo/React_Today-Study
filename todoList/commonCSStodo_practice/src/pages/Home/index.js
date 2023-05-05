import styled from 'styled-components';
import LoginForm from "./components/Form/Login/Login";
import SignUpForm from "./components/Form/SignUp/SignUp";
import { flexCenter } from '../../styles/common';
import { Link } from 'react-router-dom';

function HomePage() {
    let form = 'login';
    const onFormChange = (e) => {
        const {innerText} = e.target;   // console.log(innerText); // LOGIN or SIGN
        form = innerText.toLowerCase(); // console.log(form); // login or sign
    }

    return (
        <S.Wrapper>
            <S.Header>
                <S.LoginSelector mode={form} onClick={onFormChange}>LOGIN</S.LoginSelector>
                <S.SignUpSelector mode={form} onClick={onFormChange}>SIGN</S.SignUpSelector>
            </S.Header>
            {form === 'login' ? <LoginForm/> : <SignUpForm/>}
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
`

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
`

const LoginSelector = styled.div`
    background-color: ${({mode}) => mode === 'login' ? '#e0e0e0' : '#f5f5f5'};
`

const SignUpSelector = styled.div`
    background-color: ${({mode}) => mode === 'sign' ? '#e0e0e0' : '#f5f5f5'};
`

const S = {
    Wrapper,
    Header,
    LoginSelector,
    SignUpSelector
}