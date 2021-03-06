import React from 'react';
import PropType from 'prop-types';
import './SingleBook.css';
import BookButtons from './BookButtons';

const SingleBook = ({ book }) => (
  <div className="Book">
    <div className="book-panel">
      <div className="book-panel__summary">
        <span className="book-category">{book.category}</span>
        <h4 className="book-title">{book.title}</h4>
        <span className="book-author">{book.author}</span>
        <BookButtons id={book.item_id} />
      </div>
      <div className="book-stats">
        <div className="book-stats__progress">
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
          <div className="divider"> </div>
        </div>
        <div className="book-chapter">
          <p className="book-chapter__current">CURRENT CHAPTER</p>
          <p className="book-chapter__number">
            {book.currentChapter}
            {book.currentChapter && book.chapterTitle && ':'}
            {book.chapterTitle}
          </p>
          <button type="button" className="btn btn-progress">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  </div>
);

export default SingleBook;

SingleBook.propTypes = {
  book: PropType.shape({
    item_id: PropType.string.isRequired,
    category: PropType.string.isRequired,
    title: PropType.string.isRequired,
    author: PropType.string.isRequired,
    percentProgress: PropType.string.isRequired,
    currentChapter: PropType.string,
    chapterTitle: PropType.string,
  }).isRequired,
};
