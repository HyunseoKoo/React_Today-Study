import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import HomePage from './pages/Home';
import { TodoPage } from './pages/Todo';
import theme from './styles/theme';
import router from './routes/routing';

import AuthProvider from 'context/auth';

function App() {
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
