import { rootReducer } from './@roots';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development', // true, false
  middleware: (defaultMiddleware) => {
    // defaultMiddleware는 콜백함수의 매개변수로 이름 지정 자유롭게 가능
    if (process.env.NODE_ENV === 'development') {
      return [...defaultMiddleware(), logger];
      // 위와 같이 기존의 미들웨어를 가지고 오지 않으면 logger만 사용으로 덮어버림
    }
    return defaultMiddleware();
  },
});
