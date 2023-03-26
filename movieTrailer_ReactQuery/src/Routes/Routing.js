import LayOut from 'components/Layout';
import DetailPage from 'Pages/DetailPage';
import HomePage from 'Pages/Home';
import NowPlayList from 'Pages/NowPlay';
import SearchPage from 'Pages/Search';
import TopRatedList from 'Pages/TopRated';
import UpComingList from 'Pages/UpComing';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		element: <LayOut />,
		children: [
			{ path: '/', element: <HomePage /> },

			{
				path: 'movie/now_playing',
				element: <NowPlayList />,
			},
			{
				path: 'movie/upcoming',
				element: <UpComingList />,
			},
			{
				path: 'movie/top_rated',
				element: <TopRatedList />,
			},
			{
				path: '/search',
				element: <SearchPage />,
			},
			{
				path: '/detail/:id',
				element: <DetailPage />,
			},
		],
	},
]);

export default router;
