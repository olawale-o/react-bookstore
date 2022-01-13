import { Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
