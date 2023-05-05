import styled from "styled-components";
import TodoList from "./components/List/TodoList";
import { flexAlignCenter, flexCenter } from "styles/common";
import { Button } from "components/Button/style";
import TodoFormModal from "./components/Modal/TodoForm";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

export const print = () => {
    console.log('반갑습니다');
};

export function TodoPage() {
    const onAddTodo = new Promise((resolve) => {
        setTimeout(() => resolve('todo'), 3000);
    });

    const showToastMessage = () => {
        toast.promise(onAddTodo, {  // toast가 내장하고 있는 promise라는 고유기능
            pending: 'TODO LOADING',
            success: 'TODO SUCCESS',
            error: 'TODO ERROR',
        });
    };

    return (
        <>
            <TodoFormModal showToastMessage={showToastMessage} />
            <S.Wrapper>
                <S.Container>
                    <S.Title>
                        List
                    </S.Title>
                    <S.Content>
                        <TodoList />
                    </S.Content>
                    <S.ButtonBox>
                        <Button variant={'primary'} size={'full'}>추가</Button>
                    </S.ButtonBox>
                </S.Container>
                <ToastContainer autoClose={2000} theme="colored" />
            </S.Wrapper>
        </>
    );
}

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
