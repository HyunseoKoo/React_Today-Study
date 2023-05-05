import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan, faPen } from "@fortawesome/free-solid-svg-icons";
import { flexAlignCenter, flexCenter } from "styles/common";

function TodoCard({todo}) {
    const {state, title, content} = todo;
    return (
        // state 상태에 따라서 css가 바뀜. 이렇게 하면 dom api에 접근하지 않아도 css 조정 가능. [리액트의 장점 => addEventListener 사용하면 유지보수가 어려우지는 단점을 보완]
        <S.Wrapper state={state}>
            <S.Header>
                <S.StateBox state={state}>
                    <FontAwesomeIcon icon={faCheck}/>
                </S.StateBox>
                <S.Title state={state}>
                    {title}
                    <div>
                        <FontAwesomeIcon icon={faPen} />
                        <FontAwesomeIcon icon={faBan} />
                    </div>
                </S.Title>
            </S.Header>
            <S.Content state={state}>{content}</S.Content>
        </S.Wrapper>
    );
}

export default TodoCard;

// fontawesome
// styled-components || emotion
/*
css -in -js
    js 파일 안에 css를 정의 가능
    css를 모듈단위로 나누어 관리할 수 있다는 장점과
    하나의 js 파일 안에 css를 관리할 수 있다는 장점

    많은 개발자들이 사용하고 있는 유지보수가 쉽다는 점
    가독성이 굉장힘 좋아짐

    따라서, reactJS나 vueJS와 같은 js 프론트엔드 프레임워크를
    사용할 경우는 scss나 css 보다는 css -in -js를 많이 활용

    npm i styled-components
    npm i @fortawesome/free-solid-svg-icons     // svg 사용하기 위함
    npm i @fortawesome/react-fontawesome        // 리액트 fontawesome 본체
*/


const Wrapper = styled.li`
	width: 100%;
	background-color: ${({ theme }) => theme.PALETTE.white};
	border: 1px solid #999;
	margin: 16px 0;
	border-radius: 8px;
	background-color: ${({ state, theme }) =>
		state ? theme.palette.gray[100] : theme.PALETTE.white};
`;

const Header = styled.div`
	border-bottom: 1px dotted #999;
	${flexAlignCenter};
	padding: 8px 16px;
	height: 48px;
`;

const Title = styled.h1`
	width: 100%;
	display: flex;
	justify-content: space-between;
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	text-decoration: ${({ state }) => (state ? 'line-through' : 'none')}; // 텍스트 줄긋기 (완료일 경우 줄 긋고, 아닐 경우는 기본상태) => 완료여부 체크

	& svg {
		cursor: pointer;
		margin-left: 16px;
		:hover {
			transform: scale(1.2);
		}
	}
`;

const StateBox = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	margin-right: 8px;
	${flexCenter};
	color: ${({ state }) => (state ? '#3CB371' : '#999')};
	cursor: pointer;
	:hover {
		transform: scale(1.2);
	}
`;

const Content = styled.div`
	padding: 16px;
	text-decoration: ${({ state }) => (state ? 'line-through' : 'none')};

	& textarea {
		width: 100%;
		height: 100%;
		border: 1px dotted #999;
		outline: none;
		resize: none;
	}
`;

const S = {
	Wrapper,
	Header,
	StateBox,
	Title,
	Content,
};
