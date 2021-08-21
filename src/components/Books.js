import React from 'react';
import { useSelector } from 'react-redux';
import booksSelector from '../redux/books/booksSelector';
import SingleBook from './SingleBook';
import AddBook from './AddBook';

const Books = () => {
  const booksArray = useSelector(booksSelector);
  const books = booksArray.map((book) => <SingleBook book={book} key={book.id} />);

  return (
    <div className="Books">
      <div className="book-lists">
        { books }
      </div>
      <hr />
      <AddBook />
    </div>
  );
};

export default Books;
