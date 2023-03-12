import AuthApi from 'apis/authApi';
import axios from 'axios';
import Button from 'components/Button/Button';
import useInputs from 'hooks/useInputs';
import { useEffect, useState } from 'react';
import * as S from '../style';

function SignUpForm({ setForm }) {
  const [{ email, password, passwordConfirm }, onChangeForm] = useInputs({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [error, setError] = useState('');

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert('정보를 입력해주세요');
    if (password !== passwordConfirm) return alert('비밀번호 확인이 일치하지 않습니다');

    // 회원가입 : post (새로 만드는 것으로 rest API의 원리로서 등록하는건 post이며, id와 password가 주소에 노출되지 않아야 하기 때문)
    // 원래는 post(백엔드 API주소가 들어가야 함_백엔드 API주소는 노출되면 안됨)  cf. 실무에서는 백엔드 API와 통신할 데이터 형식이 문서나 스웨거 주소에 정해져 있음.
    try {
      // 백엔드API 관심사 분리하기 전 코드
      // const res = await axios.post('http://localhost:9000/user/sign', {
      //   email,
      //   password,
      const { data } = await AuthApi.signup(email, password);
      // console.log(res); 백엔드에서 보내준 정보 // {data: {message: true, data: '축하드립니다. 회원가입에 성공하셨습니다'}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
      if (!alert(data.data)) {
        // 백엔드에 있는 정보에 접근하는 방법. 백엔드에서 받아야하는 정보는 res.data에 실려서 옴. 그외 정보는 환경적인 부가 정보.
        setForm('login');
      }
    } catch (err) {
      // 백엔드 API 주소가 사라졌거나 하는 경우에 post 요청이 실행 안될 수 있음. 이러한 에러를 표시/처리하기 위함.
      // console.log(err); // AxiosError {message: 'Request failed with status code 400', name: 'AxiosError', code: 'ERR_BAD_REQUEST', config: {…}, request: XMLHttpRequest, …}
      // console.log(err.response.data); // {message: false, error: '이미 사용중인 이메일입니다.'}
      setError(err.response.data.error);
      // throw new Error(err); // console.error(err); 와 같은 뜻. 상위 처리 대상인 window가 error를 표시하는 방법은 console창에 보여주는 것이기 때문.
      // http response status code: 백엔드에 요청을 보냈을 때 응답을 어떻게 하는지를 표현. 200번대 성공 / 400번대 사용자 요청 오류 / 500번대 백엔드(서버) 오류
    }
  };
  // 이메일이 바뀌면 error를 초기화함
  useEffect(() => {
    setError('');
  }, [email]);

  useEffect(() => {
    if (password !== passwordConfirm) {
      return setError('비밀번호 확인이 일치하지 않습니다');
    }
    setError('');
  }, [password, passwordConfirm]);

  const full = password && passwordConfirm;

  return (
    <S.Form onSubmit={handleSignUpSubmit}>
      <S.InputBox>
        <input placeholder="e-mail" name={'email'} onChange={onChangeForm} />
        <span>이메일</span>
      </S.InputBox>
      <S.InputBox>
        <input type="password" placeholder="password" name={'password'} onChange={onChangeForm} />
        <span>비밀번호</span>
      </S.InputBox>
      <S.InputBox>
        <input
          type="password"
          placeholder="password confirm"
          name={'passwordConfirm'}
          onChange={onChangeForm}
        />
        <span>비밀번호 확인</span>
      </S.InputBox>
      <S.Error visible={error}>{error}</S.Error>
      <Button variant={'primary'} size={'full'} disabled={error || !full}>
        회원가입
      </Button>
    </S.Form>
  );
}
export default SignUpForm;
