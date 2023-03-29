import Button from 'components/Button/Button';
import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from 'styles/common';
import TodoList from './components/List/TodoList';
import TodoFormModal from './components/Modal/TodoForm';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';
import TodoApi from 'apis/todoApi';
import { Suspense } from 'react';
import axios from 'axios';

export const print = () => {
  console.log('반갑습니다');
};

function TodoPage() {
  // state
  const [isOpenAddTodoModal, setIsOpenAddTodoModal] = useState(false);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const getTodoList = async () => {
      const res = await TodoApi.getTodo();
      setTodoList(res.data.data);
    };

    getTodoList();
  }, []);

  // toast
  const handleAddTodo = (title, content) => {
    if (!title | !content) {
      return alert('빈칸을 채워세요');
    };

    // msw 적용 수정 부분
    const newTodo = {
      title,
      content
    };

    return axios.post("/api/todo", newTodo).then(
      (res) => {
        console.log(res)
      }
    )
  };

  const showAddTodoToastMessage = (title, content) => [
    toast.promise(handleAddTodo(title, content), {
      pending: 'TODO LOADING',
      success: 'TODO SUCCESS',
      error: 'TODO ERROR',
    }),
  ];

  // handle
  const handleOpenTodoAddModal = () => {
    setIsOpenAddTodoModal(true);
  };

  const handleCloseTodoAddModal = () => {
    setIsOpenAddTodoModal(false);
  };

  return (
    <>
      {isOpenAddTodoModal && (
        <TodoFormModal
          showAddTodoToastMessage={showAddTodoToastMessage}
          onClose={handleCloseTodoAddModal}
        />
      )}
      <S.Wrapper>
        <S.Container>
          <S.Title>List</S.Title>
          <S.Content>
            <TodoList todoList={todoList} setTodoList={setTodoList} />
          </S.Content>
          <S.ButtonBox>
            <Button variant={'primary'} size={'full'} onClick={handleOpenTodoAddModal}>
              추가
            </Button>
          </S.ButtonBox>
        </S.Container>
        <ToastContainer autoClose={2000} theme="colored" />
      </S.Wrapper>
    </>
  );
}

export default TodoPage;

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.PALETTE.primary[300]};
  color: ${({ theme }) => theme.PALETTE.fontColor};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  padding-bottom: 64px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const S = {
  Wrapper,
  Container,
  Title,
  ButtonBox,
  Content,
};

/* 

prettier, eslint, husky 
errorboundary, customApiError, suspense
--- 3시간 --

(redux-saga 생략 ㅠ)
axiosTodo 종료 --> redux - tool - kit
-- 2시간 --

*/
