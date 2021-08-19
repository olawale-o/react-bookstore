import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from './logger';
import booksReducer from './books/books';

const reducer = combineReducers({ books: booksReducer });
const configureStore = createStore(reducer, applyMiddleware(logger));

export default configureStore;
