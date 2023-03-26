// import { useQuery } from '@tanstack/react-query';
// import MovieApi from 'Apis/movieApi';
import HoverMovieCard from 'components/Card/HoverCard';

import styled from 'styled-components';
import { flexSpaceBetween } from 'Styles/common';

const Preview = ({ data, word }) => {
	const top4 = data && data.data.results.slice(0, 4);

	return (
		<S.Wrapper>
			<S.Bar>
				<span style={{ color: 'white', fontSize: '20px' }}>{word}</span>
				<S.Button>more &gt;</S.Button>
			</S.Bar>
			<S.Cards>
				{top4 &&
					top4.map(item => <HoverMovieCard movie={item} key={item.id} />)}
			</S.Cards>
		</S.Wrapper>
	);
};

export default Preview;

const Wrapper = styled.div`
	width: 80%;
	margin: 0 auto;
	background-color: black;
	@media (max-width: 768px) {
		width: 80%;
		height: 300px;
	}
	@media (max-width: 1024px) {
		width: 80%;
		height: 300px;
	}
`;

const Bar = styled.div`
	width: 100%;
	${flexSpaceBetween}
	padding: 5px 20px;
	> button {
		border: none;
		padding: 10px 15px;
		border-radius: 10px;
	}
`;

const Button = styled.button`
	color: white;
	background: none;
	:hover {
		background-color: rgba(255, 255, 255, 0.1);
	}
`;

const Cards = styled.div`
	${flexSpaceBetween}
	/* margin-bottom: 50px; */
	padding-bottom: 50px;
`;

const S = {
	Wrapper,
	Bar,
	Button,
	Cards,
};
