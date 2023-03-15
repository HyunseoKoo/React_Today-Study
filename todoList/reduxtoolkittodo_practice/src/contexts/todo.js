const { createContext, useReducer } = require('react');

const initialState = [];

const TodoListContext = createContext();
const TodoDispatchContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [action.payload, ...state];

    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload);

    case 'UPDATE_TODO':
      const newTodo = [...state];
      const todoIndex = newTodo.findIndex((todo) => todo.id === action.payload.id);
      newTodo[todoIndex].content = action.payload.content;
      newTodo[todoIndex].state = action.payload.state;
      return newTodo;

    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [todoList, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoListContext.Provider value={todoList}>
      <TodoDispatchContext value={dispatch}>{children}</TodoDispatchContext>
    </TodoListContext.Provider>
  );
};
export default TodoProvider;
