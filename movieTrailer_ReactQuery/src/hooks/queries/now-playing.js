import { useQuery } from '@tanstack/react-query';
import MovieApi from 'Apis/movieApi';
import { queryConfig } from './@config';

export const usePopular = () => {
	const { data: popular } = useQuery(
		['POPULAR'],
		() => MovieApi.getPopular(),
		queryConfig,
	);
	return { popular };
};

export const useNowPlaying = nowPlayingLst => {
	const { data: nowPlaying } = useQuery(
		['NOW_PLAYING'],
		() => MovieApi.getNowPlaying(nowPlayingLst),
		queryConfig,
	);
	return { nowPlaying };
};

export const useTopRated = topRatedList => {
	const { data: topRated } = useQuery(
		['TOP_RATED'],
		() => MovieApi.getTopRated(topRatedList),
		queryConfig,
	);
	return { topRated };
};

export const useUpComing = upComingList => {
	const { data: upComing } = useQuery(
		['UP_COMING'],
		() => MovieApi.getUpComing(upComingList),
		queryConfig,
	);
	return { upComing };
};
