import { Axios } from './core';

const PATH = '/todo';

const TodoApi = {
  getTodo() {
    return Axios.get(PATH);
  },

  addTodo({ content, title }) {
    return Axios.post(PATH, { content, title });
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
Axios 모듈화의 장점: 재사용성 / 유지보수 용이
               단점: 파일 갯수가 늘어나면 개발자에게 혼동을 준다. (실무에서는 많아짐)

*/
