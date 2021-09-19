import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home/Home';
import { Header } from './components/header/Header';
import { Genre } from './pages/Genre/Genre'
import { Movie } from './pages/Movie/Movie';
import { GridSlider } from './components/gridSlider/GridSlider';
import { MovieSlider } from './components/movieSlider/MovieSlider';

function App() {

  return (
    <>
      <Header />
     <MovieSlider />
    </>
  );
}

export default App;
