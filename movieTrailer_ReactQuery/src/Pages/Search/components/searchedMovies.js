import styled from 'styled-components';

function SearchedMovies() {
	return (
		<Wrapper>
			<Poster>포스터</Poster>
			<Info>
				<Top>
					<Title>제목</Title>
					<Score>⭐4.5</Score>
				</Top>
				<Preview>
					미리보기 (소개)미리보기 (소개)미리보기 (소개)미리보기 (소개)<br></br>
					미리보기 (소개)미리보기 (소개)미리보기 (소개)미리보기 (소개)<br></br>
					미리보기 (소개)미리보기 (소개)미리보기 (소개)미리보기 (소개)<br></br>
				</Preview>
			</Info>
		</Wrapper>
	);
}
export default SearchedMovies;

const Wrapper = styled.div`
	height: 40vh;
	list-style: none;
	margin: 0;
	padding: 0;
	border: 5px solid salmon;
	display: flex;
	justify-content: center;
`;

const Poster = styled.div`
	width: 17%;
	height: 100%;
	border: 3px solid black;
`;

const Info = styled.div`
	width: 83%;
	height: 100%;
	border: 3px solid yellowgreen;
	display: flex;
	flex-direction: column;
`;
const Top = styled.div`
	height: 50%;
	border: 3px solid yellowgreen;
	display: flex;
	flex-direction: row;
`;
const Title = styled.div`
	width: 40%;
	height: 100%;
	border: 2px solid hotpink;
	font-weight: 900;
	font-size: large;
`;

const Score = styled.div`
	width: 60%;
	height: 30%;
	border: 2px solid tan;
`;

const Preview = styled.div`
	width: 100%;
	height: 50%;
	border: 2px solid navy;
	line-height: 1.5;
`;
