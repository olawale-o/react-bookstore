import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookButtons = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <ul className="book-modify">
      <li>
        <button type="button">Comments</button>
      </li>
      <li>
        <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
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
