/* redux의 rootReducer를 정의하세요 */

import { combineReducers } from 'redux';
import posts from './4_redux';

export const rootReducer = combineReducers({ posts });
