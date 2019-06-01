import React from 'react';
import './App.css';
import { fetchTopRated, fetchPopular, fetchUpcoming } from './moviesService'

/*Estructura de una película*/
const Movie = ({ movie }) => {
  return <div class="tile">
    <div class="tile__media">
      <img class="tile__img" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/>
    </div>
    <div class="tile__details">
      <div class="tile__title">
        {movie.title}
      </div>
      <div class="tile__genre">
        {movie.vote_average}
      </div>
    </div>
  </div>
};

/*Estructura de películas populares*/
const PopularMovie = ({ movie }) => {
  return <div class="tile">
    <div class="tile__media">
      <img class="tile__img__poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
    </div>
  </div>
};

class UpcomingMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = { movies: [] };
  }

  componentDidMount() {
    fetchUpcoming()
      .then(movies => this.setState({ movies }));
  }

  render() {
    return React.createElement(
      "div",
      {},
      this.state.movies.map(movie => React.createElement(Movie, { movie }))
    );
  }
}

class TopRatedMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = { movies: [] };
  }

  componentDidMount() {
    fetchTopRated()
      .then(movies => this.setState({ movies }));
  }

  render() {
    return React.createElement(
      "div",
      {},
      this.state.movies.map(movie => React.createElement(Movie, { movie }))
    );
  }
}

class PopularMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = { movies: [] };
  }

  componentDidMount() {
    fetchPopular()
      .then(movies => this.setState({ movies }));
  }

  render() {
    return React.createElement(
      "div",
      {},
      this.state.movies.map(movie => React.createElement(PopularMovie, { movie }))
    );
  }
}

function App() {
  return (
    <div className="App">
      <div class="row">
        <h3>Próximamente</h3>
        <div class="row__inner">
          <UpcomingMovies />
        </div>
        <h3>Mejores Rankeadas</h3>
        <div class="row__inner">
          <TopRatedMovies />
        </div>
        <h3>POPULARES DE LITEFLIX</h3>
        <div class="row__inner">
          <PopularMovies />
        </div>
      </div>
    </div>
  );
}

export default App;
