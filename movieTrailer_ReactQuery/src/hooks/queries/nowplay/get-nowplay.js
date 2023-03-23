import { useQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';

const useGetNowPlay = params => {
	const { data, error, status, isLoading } = useQuery(
		['NOW_PLAY'],
		() => MovieApi.getNowPlay(params),
		{
			refetchOnWindowFocus: false,
			retry: 1,
			cacheTime: 1000 * 60 * 5,
			onSuccess: () => {},
			onError: () => {},
		},
	);
	return { data, error, status, isLoading };
};

export default useGetNowPlay;
