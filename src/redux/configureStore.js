import { createStore, combineReducers } from 'redux';
import composedEnhancers from './enhancer';
import booksReducer from './books/books';

const reducer = combineReducers({ books: booksReducer });
const configureStore = createStore(reducer, composedEnhancers);

export default configureStore;
