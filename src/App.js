import { Route, Switch } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Books} exact />
        <Route path="/categories" component={Categories} />
      </Switch>
    </div>
  );
}

export default App;
