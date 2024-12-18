import './App.scss';
import Home from './Home/home';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';
import Movie from './movieDetail/movie';
import MovieList from './MovieList/MovieList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Allmovie from './AllMovie/Allmovie';
import Actor from './Actor/actor';
import ActorDetails from './ActorDetails/ActorDetails';
import CategoriesMovies from './Categorie/CategoriesMovies';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/search' exact Component={Search}></Route>
          <Route path='/actorDetails/:id' exact Component={ActorDetails}></Route>
          <Route path='/acteur' exact Component={Actor}></Route>
          <Route path='/categorie' exact Component={CategoriesMovies}></Route>
          <Route path='/film' exact Component={Allmovie}></Route>
          <Route path='movie/:id' element={<Movie />}></Route>
          <Route path='movies/:type' element={<MovieList />}></Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
