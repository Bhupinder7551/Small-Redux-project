import { createStore, applyMiddleware } from 'redux';
import bookReducer from './newBook/bookReducer';

const thunkMiddleware = require('redux-thunk').default;

const store = createStore(bookReducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log(store.getState()))
export default store;