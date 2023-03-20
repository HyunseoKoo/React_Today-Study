import { Axios } from 'apis/core';
import TodoApi from 'apis/todoApi';
import TodoCard from './Card/Card';

function TodoList({ todoList, setTodoList }) {
  const handleUpdateTodo = async (id, content, state) => {
    // console.log(id, content, state);
    try {
      const res = await TodoApi.updateTodo(id, { content, state });
      console.log(res);
      const newTodoList = [...todoList];
      const index = newTodoList.findIndex((todo) => todo.id === res.data.data.id);
      newTodoList[index] = res.data.data;
      setTodoList(newTodoList);
      // setTodoList(res.)
    } catch (err) {
      console.log(err);
    }
  };

  const onDeleteTodo = async (id) => {
    if (window.confirm('정말 삭제하시겠습니까')) {
      const { data } = await TodoApi.deleteTodo(id);
      setTodoList(todoList.filter((todo) => todo.id !== data.data));
    }
  };

  return (
    <div>
      {/* {TODO_LIST.map((todo) => <TodoCard />)} */}
      {todoList.map((todo) => {
        return (
          <TodoCard
            key={todo.id}
            todo={todo}
            example={'test'}
            handleEdit={handleUpdateTodo}
            onDelete={onDeleteTodo}
          />
        );
      })}
      {/*
            상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하기 위해
            props(속성)을/를 이용하여 데이터를 전달
            */}
    </div>
  );
}
export default TodoList;
