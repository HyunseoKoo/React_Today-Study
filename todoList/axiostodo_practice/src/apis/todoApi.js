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
