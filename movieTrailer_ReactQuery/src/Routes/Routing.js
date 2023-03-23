import LayOut from 'components/Layout';
import SearchPage from 'Pages/Search';
import HomePage from '../Pages/Home';
import DetailPage from 'Pages/DetailPage/detailInfo';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',

		element: <LayOut />,
		children: [
			{
				path: '',
				element: <HomePage />,
			},
			{
				path: '/detail/:id',
				element: <DetailPage />,
			},
			{
				path: '/search',
				element: <SearchPage />,
			},
		],
	},
]);

export default router;
