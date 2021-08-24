import React from 'react';
import { useSelector } from 'react-redux';
import booksSelector from '../redux/books/booksSelector';
import './Books.css';
import SingleBook from './SingleBook';
import AddBook from './AddBook';

const Books = () => {
  const booksArray = useSelector(booksSelector);
  const books = booksArray.map((book) => <SingleBook book={book} key={book.item_id} />);
  return (
    <div className="Books">
      <div className="books-container">
        <div className="book-lists">
          { books }
        </div>
        <hr />
        <AddBook />
      </div>
    </div>
  );
};

export default Books;
