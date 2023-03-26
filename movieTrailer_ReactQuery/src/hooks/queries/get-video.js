import { useQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';

const useVideo = movieId => {
	const { data, error, status, isLoading} = useQuery(
		['GET_VIDEO'],
		() => MovieApi.getVideos(movieId),
		{refetchOnWindowFocus: false,
		retry: 1,
		cacheTime: 1000 * 10 * 50, 
		onError: ()=>{
			console.log('에러')
		}
	}
	);

	return { data, error, status, isLoading };
};

export default useVideo;
