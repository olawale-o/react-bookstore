import { CREATE_BOOK, REMOVE_BOOK, LOAD_BOOKS } from './books_action_types';

export const createBook = (payload) => ({
  type: CREATE_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const loadBooks = (payload) => ({
  type: LOAD_BOOKS,
  payload,
});
