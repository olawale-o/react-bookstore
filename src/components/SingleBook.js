import React from 'react';
import PropType from 'prop-types';

const SingleBook = ({ book }) => (
  <div className="Book">
    <div className="book-summary">
      <span className="book-category">{book.categories}</span>
      <h4 className="book-title">{book.title}</h4>
      <a href="/#">{book.author}</a>
      <ul className="book-modify">
        <li>
          <a href="/#">Comments</a>
        </li>
        <li>
          <a href="/#">Remove</a>
        </li>
        <li>
          <a href="/#">Edit</a>
        </li>
      </ul>
    </div>
    <div className="book-progress">
      <div className="book-progress__indicator"> </div>
      <div className="book-progress__level">
        <div className="book-progress__level-percentage">
          {book.completed}
          %
        </div>
        <div className="book-progress__level-status">Completed</div>
      </div>
    </div>
    <div className="book-chapter">
      <p className="book-chapter__current">CURRENT CHAPTER</p>
      <p className="book-chapter__number">
        {book.currentChapter}
        {book.currentChapter && book.chapterTitle && ':'}
        {book.chapterTitle}
      </p>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </div>
);

export default SingleBook;

SingleBook.propTypes = {
  book: PropType.shape({
    id: PropType.number.isRequired,
    categories: PropType.string.isRequired,
    title: PropType.string.isRequired,
    author: PropType.string.isRequired,
    completed: PropType.string.isRequired,
    currentChapter: PropType.string,
    chapterTitle: PropType.string,
  }).isRequired,
};
