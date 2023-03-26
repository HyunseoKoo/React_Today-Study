import { useQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import { queryConfig } from './@config';

const useDetailInfo = movieId => {
	const { data, error, status, isLoading } = useQuery(
		['GET_DETAIL'],
		() => MovieApi.getDetailInfo(movieId),
		queryConfig,
	);
	return { data, error, status, isLoading };
};

export default useDetailInfo;
