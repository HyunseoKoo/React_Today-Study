import { useQuery } from '@tanstack/react-query';
import DetailInfoApi from 'Apis/movieApi';

const useDetailInfo = movieId => {
	// mutate는 로그인과 같이 post 즉, body로 데이터 보낼때 사용
	// return useMutation(movieId => DetailInfoApi.getDetailInfo(movieId), {
	// 	onSuccess: res => {
	// 		return res;
	// 	},
	// });
	const { data, error, status, isLoading } = useQuery(
		// 상수관리 폴더 만들것?
		['GET_DETAIL'],
		() => DetailInfoApi.getDetailInfo(movieId),
		{
			refetchOnWindowFocus: false,
			retry: 1,
			cacheTime: 1000 * 5 * 60,
			onSuccess: res => {
				console.log(res);
			},
			onError: () => {},
		},
	);
	return { data, error, status, isLoading };
};

export default useDetailInfo;
