import { createStore } from 'redux';
import { rootReducer } from '../store';

const reduxConfig = () => {
  const store = createStore(rootReducer);
  return store;
};

export default reduxConfig;
