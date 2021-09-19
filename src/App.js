import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home/Home';
import { Genre } from './pages/Genre/Genre'
import { Movie } from './pages/Movie/Movie';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { WatchList } from './pages/WatchList/WatchList';

function App() {

  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/genre/:title" component={Genre} />
        <Route exact path="/movie" component={Movie} />
        <Route exact path="/watchList" component={WatchList} />
      </Router>
  );
}

export default App;
