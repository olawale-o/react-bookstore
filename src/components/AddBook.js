import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import './AddBook.css';
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
  const onAddBookToStore = async (event) => {
    event.preventDefault();
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
    dispatch(addBook({ appId, book: newBook }));
    setTitle('');
    setCategory('');
  };

  return (
    <div className="AddBook">
      <h2 className="heading">ADD NEW BOOK</h2>
      <form onSubmit={onAddBookToStore}>
        <div className="addbook-form">
          <div className="input-field">
            <input type="text" className="input" name="book-title" value={title} placeholder="Book title" onChange={handleChangeTitle} required />
          </div>
          <select name="category" className="select" value={category} onChange={handleChangeCategory} required>
            <option value="">Category</option>
            <option value="Action">Action</option>
            <option value="science-fiction">Science Fiction</option>
            <option value="economy">Economy</option>
          </select>
          <button type="submit" className="btn btn-add">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
