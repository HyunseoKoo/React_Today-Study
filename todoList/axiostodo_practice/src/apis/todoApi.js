import { Axios } from './core';

const PATH = '/todo';

const TodoApi = {
  getTodo() {
    return Axios.get(PATH);
  },

  addTodo({ title, content }) {
    return Axios.post(PATH, { title, content });
  },

  updateTodo(id, { content, state }) {
    return Axios.put(PATH + `/${id}`, { content, state });
  },

  deleteTodo(id) {
    return Axios.delete(PATH + `/${id}`);
  },
};
export default TodoApi;

/*
todo 페이지 제작하기 위한 api 정리

1. axios.get("/todo") // return 값 ---> todolist
   axios.post("/todo", {content, title}) ---> return값: {todo}
   axios.put("/todo/$id", {content, title}) ---> return값: {update todo}
   axios.delete("/todo/$id") ---> id

2. 사용자가 todo페이지에 접속했습니다
   페이지에게 어떤 것이 랜더링 되어야하나요? --- todoList --- axios.get
   todoList는 state로 관리되어야할까요? --- state로 관리 ---> useState

   화면이 랜더링 될 때마다 axios 새로 가지고 와야할까?
   axios를 해야할 순간 ---> 페이지가 처음 열렸을 때 ---> useEffect
*/
