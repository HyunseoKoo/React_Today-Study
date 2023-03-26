import { useInfiniteQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';

export const useInfiniteNowPlay = () => {
	const res = useInfiniteQuery(
		['INFINITE_NOW_PLAY'],
		({ pageParam = 1 }) => MovieApi.getNowPlaying(pageParam),
		{
			getNextPageParam: (lastPage, allPages) => {
				return lastPage.data.page + 1;
			},
		},
	);

	return res;
};

export const useInfiniteTopRated = () => {
	const res = useInfiniteQuery(
		['INFINITE_TOPRATED'],
		({ pageParam = 1 }) => MovieApi.getTopRated(pageParam),
		{
			getNextPageParam: (lastPage, allPages) => {
				return lastPage.data.page + 1;
			},
		},
	);

	return res;
};

export const useInfiniteUpComing = () => {
	const res = useInfiniteQuery(
		['INFINITE_UPCOMING'],
		({ pageParam = 1 }) => MovieApi.getUpComing(pageParam),
		{
			getNextPageParam: (lastPage, allPages) => {
				return lastPage.data.page + 1;
			},
		},
	);

	return res;
};
