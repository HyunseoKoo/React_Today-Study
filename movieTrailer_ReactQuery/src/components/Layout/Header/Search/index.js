import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SearchBar() {
	const navigate = useNavigate();

	const onSearchSubmit = e => {
		const searchWord = e.target.word.value;
		if (searchWord) {
			navigate('/search');
		}
	};

	return (
		<Form onSubmit={onSearchSubmit}>
			<InputBox
				autoComplete="off"
				placeholder="찾고 싶은 영화를 검색해주세요"
				name="word"
			></InputBox>
			<Button>
				<img src="Assets/search_icon.png" alt="icon"></img>
			</Button>
		</Form>
	);
}

export default SearchBar;

const Form = styled.form`
	display: flex;
	flex-direction: row;
	width: 50%;

	border-radius: 30px;
	height: 5vh;
	text-align: center;
	margin-top: 30px;
	margin-bottom: 10px;
`;

const InputBox = styled.input`
	width: 90%;
	height: 5vh;
	border: none;
	font-size: 1.2rem;
	border-top-left-radius: 25px;
	border-bottom-left-radius: 25px;
	position: relative;
	padding-left: 50px;
	:focus {
		outline: none;
	}
	@media (max-width: 768px) {
		height: 3vh;
		font-size: 0.8rem;
		padding-left: 20px;
	}
`;

const Button = styled.button`
	width: 10%;
	cursor: pointer;
	border: none;
	border-bottom-right-radius: 25px;
	border-top-right-radius: 25px;
	@media (max-width: 768px) {
		height: 3vh;
	}
	& img {
		width: 50%;
	}
`;
