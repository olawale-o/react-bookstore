import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import { deleteBook } from '../utils/utils';
import { removeBook } from '../redux/books/books_creators';
import { getStorage } from '../storage/storage';

const BookButtons = ({ id }) => {
  const appId = getStorage();
  const dispatch = useDispatch();

  const onRemoveBook = async (id) => {
    const response = await deleteBook(appId, id);
    if (response) {
      dispatch(removeBook(id));
    }
  };

  return (
    <ul className="book-modify">
      <li>
        <button type="button">Comments</button>
      </li>
      <li>
        <button type="button" onClick={() => onRemoveBook(id)}>Remove</button>
      </li>
      <li>
        <button type="button">Edit</button>
      </li>
    </ul>
  );
};

export default BookButtons;

BookButtons.propTypes = {
  id: PropType.string.isRequired,
};
