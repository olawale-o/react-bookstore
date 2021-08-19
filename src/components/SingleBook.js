import React from 'react';

const SingleBook = () => {
  return (
    <div className="Book">
        <div className="book-summary">
          <span className="book-category">Action</span>
          <h4 className="book-title">The Hunger Games</h4>
          <a href="/#">Suzane Collins</a>
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
            <div className="book-progress__indicator"></div>
            <div className="book-progress__level">
                <div className="book-progress__level-percentage">
                    64%
                </div>
                <div className="book-progress__level-status">
                    Completed
                </div>
            </div>
        </div>
        <div className="book-chapter">
            <p className="book-chapter__current">CURRENT CHAPTER</p>
            <p className="book-chapter__number">Chapter 17</p>
            <button type="button">UPDATE PROGRESS</button>
        </div>
    </div>
  );
};

export default SingleBook;