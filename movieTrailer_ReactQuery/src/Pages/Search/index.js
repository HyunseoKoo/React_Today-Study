import { useInfiniteQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SearchedMovies from './components/searchedMovies';

function SearchPage() {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);

	const word = searchParams.get('word');

	const {
		data: searchResults,
		isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useInfiniteQuery(
		['searchResults', word],
		({ pageParam = 1 }) => MovieApi.getSearch(word, pageParam),
		{
			onError: () => console.log('에러'),
			getNextPageParam: (lastPage, allPages) => {
				if (lastPage.data.page < lastPage.data.total_pages) {
					return lastPage.data.page + 1;
				} else {
					return undefined;
				}
			},
		},
	);
	const handleScroll = useCallback(
		node => {
			if (node && !isFetchingNextPage && hasNextPage) {
				const observer = new IntersectionObserver(
					entries => {
						if (entries[0].isIntersecting) {
							fetchNextPage();
						}
					},
					{
						rootMargin: '0px 0px 500px 0px',
					},
				);
				observer.observe(node);
			}
		},
		[hasNextPage, fetchNextPage],
	);

	return (
		<Wrapper>
			<h1>Search "{word}"</h1>
			{searchResults &&
				searchResults.pages.map(
					page =>
						page &&
						page.data.results.map(movie => {
							const link = `/detail/${movie.id}`
							return (
								movie.id && <StyledLink to={link}>
							<SearchedMovies key={movie.id} movie={movie} />
							</StyledLink>
							)}),
				)}
			<div ref={handleScroll}></div>
		</Wrapper>
	);
}

export default SearchPage;

const Wrapper = styled.div`
	border: 2px solid cornflowerblue;
	margin: 0 15%;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: white;
`