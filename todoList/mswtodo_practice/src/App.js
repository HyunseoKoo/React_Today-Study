import {  RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import theme from './styles/theme';
import router from './routes/routing';

import AuthProvider from 'context/auth';
import {worker} from '_mock_/browser';


function App() {

  if(process.env.NODE_ENV === "development") {
    worker.start()
  }
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}
export default App;
