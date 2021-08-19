import React from 'react';
import SingleBook from './SingleBook';

const Books = () => {
  const booksArray = [1, 2, 3];
  const books = booksArray.map((book) => <SingleBook book={book} key={book} />);
  return (
    <div className="Books">
      { books }
    </div>
  );
};

export default Books;
