import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getStorage } from '../storage/storage';
import { addBook } from '../redux/books/books_async_actions';

const AddBook = () => {
  const appId = getStorage();
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

  const onAddBookToStore = async () => {
    const book = {
      item_id: uuidv4(),
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
    dispatch(addBook(appId, newBook));
  };

  return (
    <div className="AddBook">
      <h2>ADD NEW BOOK</h2>
      <div className="addbook-form">
        <input type="text" name="book-title" value={title} placeholder="Book title" onChange={handleChangeTitle} required />
        <select name="category" value={category} onChange={handleChangeCategory}>
          <option value="">Category</option>
          <option value="Action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button type="button" onClick={() => onAddBookToStore()}>ADD BOOK</button>
      </div>
    </div>
  );
};

export default AddBook;
