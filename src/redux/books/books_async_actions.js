import { createApp, fetchAllBooks } from '../../utils/utils';
import { loadBooks, noBooks } from './books_creators';
import { getStorage, setStorage } from '../../storage/storage';

export default async function getBooks(dispatch) {
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
    dispatch(noBooks(error));
  }
}
// SIAQ1hMBeF0gVl5UwZy5
// qqNRial6NCX6XH6QuDRG
