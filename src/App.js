import './App.css';
import { Route } from 'react-router-dom';
import SearchPage from './pages/SeachPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ SearchPage } />
    </div>
  );
}

export default App;
