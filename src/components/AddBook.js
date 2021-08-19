import React from 'react';

const AddBook = () => (
  <div className="AddBook">
    <h2>ADD NEW BOOK</h2>
    <div className="addbook-form">
        <input type="text" name="book-title" placeholder="Book title" />
        <select name="category">
            <option value="Action">Action</option>
            <option value="science-fiction">Science Fiction</option>
            <option value="economy">Economy</option>
        </select>
    </div>
  </div>
);

export default AddBook;
