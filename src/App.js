import './App.css';
import { Route } from 'react-router-dom';
import SearchPage from './pages/SeachPage';
import Favourites from './pages/Favourites';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ SearchPage } />
      <Route path="/favourites" component={ Favourites } />
    </div>
  );
}

export default App;
