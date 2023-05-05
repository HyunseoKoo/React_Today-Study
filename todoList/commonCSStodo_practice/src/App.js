import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import theme from './styles/theme';
import router from './routes/routing';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles /> 
      <RouterProvider router={router} />
    
      {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/todo" element={<TodoPage/>} />
          </Routes>
      </BrowserRouter> */}
    </ThemeProvider>
  );
}

export default App;
