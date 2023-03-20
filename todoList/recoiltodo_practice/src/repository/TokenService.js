const TOKEN_KEY = 'access_token';

const TokenService = {
  // set 모듈화
  setToken(token) {
    localStorage.setItem(TOKEN_KEY, token);
  },
  // get
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },
  // remove
  removeToken() {
    return localStorage.removeItem(TOKEN_KEY);
  },

  //   set() {
  //     const res = localStorage.setItem(response.token);
  //     return res
};

export default TokenService;
