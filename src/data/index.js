const booksArray = [
  {
    id: Math.floor(Math.random() * 100),
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    percentProgress: '64',
    currentChapter: 'Chapter 17',
    chapterTitle: '',
  },
  {
    id: Math.floor(Math.random() * 100),
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    percentProgress: '8',
    currentChapter: 'Chapter 3',
    chapterTitle: 'A Lesson Learned',
  },
  {
    id: Math.floor(Math.random() * 100),
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    percentProgress: '0',
    currentChapter: '',
    chapterTitle: 'Introduction',
  },
];

export default booksArray;
