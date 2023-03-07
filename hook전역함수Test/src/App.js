import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './adapters/router';
import ModalProvider from './store/2_context';
import UserProvider from './store/3_context';

import { Provider } from 'react-redux';
import reduxConfig from './adapters/store';

function App() {
  const store = reduxConfig();
  // console.log(store); //{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, @@observable: ƒ}

  return (
    <Provider store={store}>
      <UserProvider>
        <ModalProvider>
          <RouterProvider router={router} />
        </ModalProvider>
      </UserProvider>
    </Provider>
  );
}

export default App;
