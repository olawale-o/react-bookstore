import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleChangeTitle = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  const handleChangeCategory = (event) => {
    event.preventDefault();
    setCategory(event.target.value);
  };

  const onAddBookToStore = (event) => {
    event.preventDefault();
    const book = {
      id: `test-${uuidv4()}`,
      title,
      category,
    };
    const newBook = {
      ...book,
      author: 'Author',
      percentProgress: '0',
      currentChapter: 'Introduction',
      chapterTitle: '',
    };
    dispatch(createBook(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <div className="AddBook">
      <h2>ADD NEW BOOK</h2>
      <div className="addbook-form">
        <form onSubmit={onAddBookToStore}>
          <input type="text" name="book-title" value={title} placeholder="Book title" onChange={handleChangeTitle} required />
          <select name="category" value={category} onChange={handleChangeCategory} required>
            <option value="">Category</option>
            <option value="Action">Action</option>
            <option value="science-fiction">Science Fiction</option>
            <option value="economy">Economy</option>
          </select>
          <button type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
