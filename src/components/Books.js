import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import booksSelector from '../redux/books/booksSelector';
import SingleBook from './SingleBook';
import AddBook from './AddBook';
import { createBook } from '../redux/books/books_creators';

const Books = () => {
  const dispatch = useDispatch();
  const booksArray = useSelector(booksSelector);
  const books = booksArray.map((book) => <SingleBook book={book} key={book.id} />);

  const addBookToStore = (book) => {
    const newBook = {
      ...book,
      author: 'Author',
      percentProgress: '0',
      currentChapter: 'Introduction',
      chapterTitle: '',
    };
    dispatch(createBook(newBook));
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
