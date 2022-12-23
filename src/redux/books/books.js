import { createSlice } from '@reduxjs/toolkit';
import booksArray from '../../data';
import { getAllBooks, deleteSingleBook, addBook } from './books_async_actions';

const initialState = booksArray;

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    loadBooks: (state) => state,
    removeBook: (state, action) => {
      const filteredBooks = state.filter((book) => action.payload !== book.item_id);
      return filteredBooks;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      const newBooks = [...state, ...action.payload];
      return newBooks;
    }).addCase(getAllBooks.rejected, (state) => state)
      .addCase(deleteSingleBook.fulfilled, (state, action) => {
        if (action.payload != null) {
          const filteredBooks = state.filter((book) => action.payload !== book.item_id);
          return filteredBooks;
        }
        return state;
      }).addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export const { loadBooks, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
