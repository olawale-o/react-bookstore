import React from 'react';
import booksArray from '../data/index';
import SingleBook from './SingleBook';
import AddBook from './AddBook';

const Books = () => {
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
