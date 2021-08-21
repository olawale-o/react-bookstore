import initialState from './books_state';
import {
  CREATE_BOOK, REMOVE_BOOK, LOAD_BOOKS, NO_BOOKS,
} from './books_action_types';

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK: {
      const filteredBooks = state.filter((book) => action.payload !== book.item_id);
      return filteredBooks;
    }
    case LOAD_BOOKS:
      return state.concat(action.payload);
    case NO_BOOKS:
      return state;
    default:
      return state;
  }
}
