import booksArray from '../../data';

export const CREATE_BOOK = 'bookStore/books/CREATEBOOK';
export const REMOVE_BOOK = 'bookStore/books/REMOVEBOOK';

const initialState = booksArray;

export const createBook = (payload) => ({
  type: CREATE_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK: {
      const filteredBooks = state.filter(({ id }) => action.payload !== id);
      return filteredBooks;
    }
    default:
      return state;
  }
};

export default booksReducer;
