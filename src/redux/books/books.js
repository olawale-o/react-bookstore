import booksArray from '../../data';

export const CREATE_BOOK = 'bookStore/books/CREATEBOOK';
export const REMOVE_BOOK = 'bookStore/books/REMOVEBOOK';
export const LOAD_BOOKS = 'bookStore/books/LOADBOOKS';
export const NO_BOOKS = 'bookStore/books/NOBOOKS';

const initialState = booksArray;

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

export const noBooks = () => ({
  type: NO_BOOKS,
});

const booksReducer = (state = initialState, action) => {
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
};

export default booksReducer;
