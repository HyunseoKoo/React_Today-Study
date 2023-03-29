import { createContext, useContext, useEffect, useState } from 'react';
import TokenService from 'repository/TokenService';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(TokenService.getToken);

  // useEffect를 사용하게 되면 작은 깜빡임이 있음
  //   useEffect(() => {
  //     const token = TokenService.getToken();
  //     if (token) {
  //       setAccessToken(token);
  //     }
  //   }, []);

  // login(token) 함수를 실행하면 토큰을 저장하고 매개변수인 token으로 accessToken 값을 저장하라 _ setToken과 getToken의 차이!?
  const login = (token) => {
    TokenService.setToken(token);
    setAccessToken(token);
  };

  // logout() 함수를 실행하면 토큰을 삭제하고 accessToken의 값을 비워라. => 토큰이 없기 때문에 로그아웃으로 인지
  const logout = () => {
    TokenService.removeToken();
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
