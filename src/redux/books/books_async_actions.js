import { createApp, fetchAllBooks } from '../../utils/utils';
import { loadBooks } from './books_creators';

export default async function getBooks(dispatch) {
  const appId = await createApp();
  const allBooks = await fetchAllBooks(appId);
  dispatch(loadBooks(allBooks));
}
