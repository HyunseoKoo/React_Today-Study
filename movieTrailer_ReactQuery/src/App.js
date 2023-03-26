import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from 'Routes/routing';

import GlobalStyles from 'Styles/global';

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<GlobalStyles />
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
