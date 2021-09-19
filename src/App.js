import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home/Home';
import { Header } from './components/header/Header';
import { Genre } from './pages/Genre/Genre'
import { Movie } from './pages/Movie/Movie';
import { GridSlider } from './components/gridSlider/GridSlider';
import { MovieSlider } from './components/movieSlider/MovieSlider';
import { MovieCard } from './components/movieCard/MovieCard';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/genre/:title" component={Genre} />
        <Route exact path="/movie" component={Movie} />
      </Router>
  );
}

export default App;
