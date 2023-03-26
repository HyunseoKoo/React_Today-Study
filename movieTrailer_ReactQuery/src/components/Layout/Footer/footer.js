import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flexAlignCenter, flexSpaceBetween } from 'Styles/common';

const BasicFooter = () => {
	return (
		<S.FooterWrapper>
			<S.FooterContainer>
				<S.FooterContent>
					<div>used OPEN_API</div>
					<Link
						to={'https://developers.themoviedb.org/3/movies/get-movie-details'}
					>
						[Link]
					</Link>
				</S.FooterContent>
				<S.FooterContent>
					<div>our Github</div>
					<Link to={'https://github.com/Frontend-TEAM1'}> [Link]</Link>
				</S.FooterContent>
			</S.FooterContainer>
			<S.FooterContainer>
				<div>Member's Github</div>
				<S.FooterContent>
					<div>Hyunseo Koo</div>
					<Link to={'https://github.com/HyunseoKoo'}> [Link]</Link>
				</S.FooterContent>
				<S.FooterContent>
					<div>Nasil Kim</div>
					<Link to={'https://github.com/nasilKiM'}> [Link]</Link>
				</S.FooterContent>
				<S.FooterContent>
					<div>JaeHoon Lee</div>
					<Link to={'https://github.com/JaeHoonKOR'}> [Link]</Link>
				</S.FooterContent>
				<S.FooterContent>
					<div>Juram Lee</div>
					<Link to={'https://github.com/JuramLee'}> [Link]</Link>
				</S.FooterContent>
				<S.FooterContent>
					<div>YoungSeung Jang</div>
					<Link to={'https://github.com/YoungSeungJang'}> [Link]</Link>
				</S.FooterContent>
			</S.FooterContainer>
			<img src="Assets/footerImg.png" />
		</S.FooterWrapper>
	);
};

export default BasicFooter;

const FooterWrapper = styled.div`
	width: 100%;
	padding: 40px 100px;
	background-color: black;
	/* ${flexSpaceBetween} */
	${flexAlignCenter}
	> div {
		color: white;
		@media (max-width: 768px) {
			font-size: 0.8rem;
		}
	}
	> img {
		height: 200px;
		position: absolute;
		right: 100px;
		@media (max-width: 768px) {
			height: 100px;
		}
	}
`;

const FooterContainer = styled.div`
	width: 30%;
	height: 200px;
	line-height: 30px;
	@media (max-width: 768px) {
		margin: 0 20px;
	}
`;

const FooterContent = styled.div`
	${flexAlignCenter}
	@media (max-width: 768px) {
		font-size: 0.8rem;
	}
`;

const S = {
	FooterWrapper,
	FooterContainer,
	FooterContent,
};
