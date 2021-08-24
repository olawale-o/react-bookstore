import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import { deleteSingleBook } from '../redux/books/books_async_actions';
import { getStorage } from '../storage/storage';

const BookButtons = ({ id }) => {
  const appId = getStorage();
  const dispatch = useDispatch();

  const onRemoveBook = (id) => {
    dispatch(deleteSingleBook(appId, id));
  };

  return (
    <ul className="book-modify">
      <li className="btn-item">
        <button type="button">Comments</button>
      </li>
      <li className="btn-item">
        <button type="button" onClick={() => onRemoveBook(id)}>Remove</button>
      </li>
      <li className="btn-item">
        <button type="button">Edit</button>
      </li>
    </ul>
  );
};

export default BookButtons;

BookButtons.propTypes = {
  id: PropType.string.isRequired,
};
