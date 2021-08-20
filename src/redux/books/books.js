import initialState from './books_state';
import { CREATE_BOOK, REMOVE_BOOK } from './books_action_types';

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK: {
      const filteredBooks = state.booksReducer.filteredBooks(({ id }) => action.payload !== id);
      return filteredBooks;
    }
    default:
      return state;
  }
}
