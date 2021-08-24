import { v4 as uuidv4 } from 'uuid';

const booksArray = [
  {
    item_id: `test-${uuidv4()}`,
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    percentProgress: '64',
    currentChapter: 'Chapter 17',
    chapterTitle: '',
  },
  {
    item_id: `test-${uuidv4()}`,
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    percentProgress: '8',
    currentChapter: 'Chapter 3',
    chapterTitle: '"A Lesson Learned"',
  },
  {
    item_id: `test-${uuidv4()}`,
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    percentProgress: '0',
    currentChapter: '',
    chapterTitle: 'Introduction',
  },
];

export default booksArray;
