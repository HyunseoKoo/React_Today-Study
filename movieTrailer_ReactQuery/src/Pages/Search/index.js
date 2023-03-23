import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SearchedMovies from './components/searchedMovies';

function SearchPage() {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const word = searchParams.get('word');

	return (
		<Wrapper>
			<h1>Search "{word}"</h1>
			<SearchedMovies />
		</Wrapper>
	);
}

export default SearchPage;

const Wrapper = styled.div`
	border: 2px solid cornflowerblue;
	margin: 0 15%;
`;
