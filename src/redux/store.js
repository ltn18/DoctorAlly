import { createStore } from 'redux';
import chatReducer from './reducers/index';

const store = createStore(chatReducer);
export default store;
