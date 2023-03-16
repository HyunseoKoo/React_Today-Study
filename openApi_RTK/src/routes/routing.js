import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import DetailIssue from '../pages/detailpage/components/detailIssue';
import MainPage from '../pages/mainpage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: '/issue/:key',
        element: <DetailIssue />,
      },
    ],
  },
]);

export default router;
