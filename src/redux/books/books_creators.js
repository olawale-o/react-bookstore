import { CREATE_BOOK, REMOVE_BOOK } from './books_action_types';

export const createBook = (payload) => ({
  type: CREATE_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
