import { Button } from 'components/Button/style';
import * as S from '../style';   // 따로 객체를 만들지 않아도 S라는 키로 style.js 파일의 값들을 가져올 수 있음

function LoginForm() {
    return (
        <S.Form>
            <S.InputBox>
                <input placeholder="e-mail"/>
                <span>이메일</span>
            </S.InputBox>
            <S.InputBox>
                <input type="password" placeholder="password"/>
                <span>비밀번호</span>
            </S.InputBox>
            <Button variant={'primary'} size={'full'}>로그인</Button>
        </S.Form>
    );
}

export default LoginForm;