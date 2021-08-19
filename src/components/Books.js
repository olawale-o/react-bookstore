import React from 'react';
import booksArray from '../data/index';
import SingleBook from './SingleBook';

const Books = () => {
  const books = booksArray.map((book) => <SingleBook book={book} key={book.id} />);
  return (
    <div className="Books">
      { books }
    </div>
  );
};

export default Books;
