import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createApp, fetchAllBooks, deleteBook, postBook,
} from '../../utils/utils';

import { getStorage, setStorage } from '../../storage/storage';

export const getAllBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    let appId = getStorage();
    try {
      if (!appId) {
        appId = await createApp();
        setStorage(appId);
      }
      const allBooks = await fetchAllBooks(appId);
      const bookEntries = Object.entries(allBooks);
      const savedBooks = bookEntries.map(([key, value]) => {
        const [book] = value;
        return {
          item_id: key,
          ...book,
          author: 'Author',
          percentProgress: '0',
          currentChapter: 'Introduction',
          chapterTitle: '',
        };
      });
      return savedBooks;
    } catch (error) {
      throw new Error('No books');
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async ({ appId, book }) => {
    const res = await postBook(appId, book);
    if (res) {
      return book;
    }
    return { };
  },
);

export const deleteSingleBook = createAsyncThunk(
  'books/deleteBook',
  async ({ appId, id }) => {
    const res = await deleteBook(appId, id);
    if (res) return id;
    return null;
  },
);
