import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import HomePage from './pages/Home';
import { TodoPage } from './pages/Todo';
import theme from './styles/theme';
import router from './routes/routing';
import { store } from 'store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />

        {/* <BrowserRouter>
        HTML5를 지원하는 브라우저 주소를 감지
        <Routes>
          Route path와 감지한 주소가 일치한 router만을 랜더링 시켜주는 역할
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />


        <Route path="/" element={<layout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Route>


        </Routes>
      </BrowserRouter> */}
      </ThemeProvider>
    </Provider>
  );
}
export default App;
