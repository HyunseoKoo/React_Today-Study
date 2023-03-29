import AuthApi from 'apis/authApi';
import { Axios } from 'apis/core';
import { useAuth } from 'context/auth';
import TokenService from 'repository/TokenService';
import reset from 'styled-reset';

function BasicHeader() {
  // const auth = TokenService.getToken();
  const auth = useAuth();

  const onLogOut = async () => {
    await AuthApi.logout(); // 로그아웃 시 리프레시 토큰이 날아감(?) 백엔드에서 처리?
    auth.logout();
  };

  const onRefresh = async () => {
    const res = await Axios.post(`/user/jwt`);
    console.log(res);
  };

  return (
    <>
      HEADER
      <button onClick={onRefresh}>리프레시</button>
      <button onClick={onLogOut}>{auth.accessToken ? '로그아웃' : '로그인'}</button>
    </>
  );
}
export default BasicHeader;
