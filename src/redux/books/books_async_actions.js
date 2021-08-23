import {
  createApp, deleteBook, fetchAllBooks, postBook,
} from '../../utils/utils';
import {
  createBook, loadBooks, noBooks, removeBook,
} from './books';
import { getStorage, setStorage } from '../../storage/storage';

export const getBooks = () => (
  async function getBooks(dispatch) {
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
      dispatch(loadBooks(savedBooks));
    } catch (error) {
      dispatch(noBooks());
    }
  }
);

export const addBook = (appId, book) => (
  async function addBook(dispatch) {
    const response = await postBook(appId, book);
    if (response) {
      dispatch(createBook(book));
    }
  }
);

export const deleteSingleBook = (appId, id) => (
  async function deleteSingleBook(dispatch) {
    if (id.startsWith('test')) {
      dispatch(removeBook(id));
    } else {
      const response = await deleteBook(appId, id);
      if (response) {
        dispatch(removeBook(id));
      }
    }
  }
);
