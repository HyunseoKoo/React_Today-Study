import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: process.env.REACT_APP_TMDB_API,
		language: 'en-US',
	},
});

export const moviesApi = {
	nowPlaying: () => api.get('movie/now_playing'),
	upcoming: () => api.get('movie/upcoming'),
	popular: () => api.get('movie/popular'),
	movieDetail: id =>
		api.get(`movie/${id}`, {
			params: {
				append_to_response: 'videos',
			},
		}),
	search: term =>
		api.get('movie/search', {
			params: {
				query: encodeURIComponent(term),
			},
		}),
};
