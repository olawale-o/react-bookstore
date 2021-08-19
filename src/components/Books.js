import React from 'react';
import { useDispatch } from 'react-redux';
import booksArray from '../data/index';
import SingleBook from './SingleBook';
import AddBook from './AddBook';
import { createBook } from '../redux/books/books_creators';

const Books = () => {
  const dispatch = useDispatch();

  const books = booksArray.map((book) => <SingleBook book={book} key={book.id} />);

  const addBookToStore = (book) => {
    dispatch(createBook(book));
  };

  return (
    <div className="Books">
      <div className="book-lists">
        { books }
      </div>
      <hr />
      <AddBook addBookToStore={addBookToStore} />
    </div>
  );
};

export default Books;
