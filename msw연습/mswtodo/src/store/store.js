import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './@roots';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

export const store = createStore(
  rootReducer, // rootReducer ---> 채워넣는다
  process.env.NODE_ENV === 'development' && composeWithDevTools(applyMiddleware(logger)) // middleware 설정
);
