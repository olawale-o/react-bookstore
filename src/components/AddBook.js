import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ addBookToStore }) => {
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

  const onAddBookToStore = () => {
    const newBook = {
      id: Math.floor(Math.random() * 100),
      title,
      category,
    };
    addBookToStore(newBook);
  };

  return (
    <div className="AddBook">
      <h2>ADD NEW BOOK</h2>
      <div className="addbook-form">
        <input type="text" name="book-title" value={title} placeholder="Book title" onChange={handleChangeTitle} />
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

AddBook.propTypes = {
  addBookToStore: PropTypes.func.isRequired,
};
