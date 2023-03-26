import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { flexSpaceBetween } from 'Styles/common';
import SearchBar from './search';
const BasicHeader = () => {
	const navigate = useNavigate();

	return (
		<S.HeaderWrapper>
			<S.HeaderLogo onClick={() => navigate('/')}>
				<img src="Assets/mascot.png" />
				<span>MOVIE 찾냥?!</span>
			</S.HeaderLogo>
			<SearchBar />
			<S.HeaderMenu>
				<span onClick={() => navigate('/movie/now_playing')}>상영</span>
				<span onClick={() => navigate('/movie/upcoming')}>예정</span>
				<span onClick={() => navigate('/movie/top_rated')}>인기</span>
			</S.HeaderMenu>
		</S.HeaderWrapper>
	);
};

export default BasicHeader;

const HeaderWrapper = styled.div`
	width: 100%;
	min-width: 768px;
	padding: 50px 100px;
	${flexSpaceBetween}
	color: white;
	background-color: black;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const HeaderLogo = styled.div`
	height: 50px;
	width: 300px;
	${flexSpaceBetween}
	/* border: 1px dotted yellow; */
	> img {
		/* border: 1px dotted yellow; */
		width: 150px;
		@media (max-width: 768px) {
			width: 100px;
		}
	}
	> span {
		font-size: 23px;
		@media (max-width: 768px) {
			font-size: 20px;
		}
	}
`;

const HeaderMenu = styled.div`
	width: 300px;
	${flexSpaceBetween}
	@media (max-width: 768px) {
		width: 250px;
	}
`;

const S = {
	HeaderWrapper,
	HeaderLogo,
	HeaderMenu,
};
