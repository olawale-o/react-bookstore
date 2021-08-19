const booksArray = [
  {
    id: Math.floor(Math.random() * 100),
    categories: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    completed: '64',
    currentChapter: 'Chapter 17',
    chapterTitle: '',
  },
  {
    id: Math.floor(Math.random() * 100),
    categories: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    completed: '8',
    currentChapter: 'Chapter 3',
    chapterTitle: 'A Lesson Learned',
  },
  {
    id: Math.floor(Math.random() * 100),
    categories: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    completed: '0',
    currentChapter: '',
    chapterTitle: 'Introduction',
  },
];

export default booksArray;
