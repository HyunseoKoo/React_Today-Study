import { Axios } from './core';

const PATH = '/user';

const AuthApi = {
  // 객체 안에 있는 함수? "메서드"
  async login(email, password) {
    // const res = await.Axios.post('/user/login', {email, password});
    const res = await Axios.post(PATH + '/login', { email, password }); // 여기서의 Axios는 core에서 만들어준 Axios!
    return res.data;
  },

  signup(email, password) {
    return Axios.post(PATH + '/sign', { email, password });
  },

  async logout() {
    const res = await Axios.post(PATH + '/logout');
    // console.log(res);
    return res.data;
  },
};
export default AuthApi;

/* 

이 페이지를 제작하기 위한 api 정리

1. axios.get("/todo") // return 값 ---> todolist

   axios.post("/todo", {content, title}) // return 값 ----> 새로 추가된  {todo}

   axios.put("/todo/$id", {content, state}) // return 값 ---> {update todo}

   axios.delete("/todo/$id") ---> id

2. 사용자가 todo페이지에 접속했습니다
   페이지에게 어떤 것이 랜더링 되어야하나요? "todoList" => axios.get 으로 받아옴
   todoList는 state로 관리되어야할까요? ----> state로 관리 ----> useState

   화면이 랜더링 될 떄마다 axios 새로 가지고 와야할까?
   axios를 해야할 순간 ---> 페이지가 처음 열렸을 때 ----> useEffect

   .....

*/
