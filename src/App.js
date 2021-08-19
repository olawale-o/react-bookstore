import { Route, Switch } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/books" component={Books} />
        <Route path="/categories" component={Categories} />
      </Switch>
    </div>
  );
}

export default App;
