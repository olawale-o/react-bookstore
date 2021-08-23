import React from 'react';
import PropType from 'prop-types';
import BookButtons from './BookButtons';

const SingleBook = ({ book }) => (
  <div className="Book">
    <div className="book-summary">
      <span className="book-category">{book.category}</span>
      <h4 className="book-title">{book.title}</h4>
      <a href="/#">{book.author}</a>
      <BookButtons id={book.id} />
    </div>
    <div className="book-progress">
      <div className="book-progress__indicator"> </div>
      <div className="book-progress__level">
        <div className="book-progress__level-percentage">
          {book.percentProgress}
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
    id: PropType.string.isRequired,
    category: PropType.string.isRequired,
    title: PropType.string.isRequired,
    author: PropType.string.isRequired,
    percentProgress: PropType.string.isRequired,
    currentChapter: PropType.string,
    chapterTitle: PropType.string,
  }).isRequired,
};
