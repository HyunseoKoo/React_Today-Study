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

{
	/*key값은 idx가 아니라(비효율적임**) 고유의 키값을 넣어야한다 */
}
export default Preview;

const Wrapper = styled.div`
	width: 80%;
	margin: 0 auto;
	background-color: black;
	@media (max-width: 768px) {
		width: 80%;
	}
	@media (max-width: 1024px) {
		width: 80%;
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
	padding-bottom: 50px;
	gap: 10px;
`;

const S = {
	Wrapper,
	Bar,
	Button,
	Cards,
};
