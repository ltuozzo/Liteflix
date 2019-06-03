import React from 'react';
import './App.css';
import { ReactComponent as Logo } from './liteflix.svg'
import { fetchTopRated, fetchPopular, fetchUpcoming } from './moviesService'

class NavBar extends React.Component {
  render() {
    return <nav>
      <Logo />
      <a href="index.html">Inicio</a>
      <a href="index.html">Series</a>
      <a href="index.html">Películas</a>
      <a href="index.html">Agregados recientemente</a>
      <a href="index.html">Mi lista</a>
    </nav>
  }
}

class Hero extends React.Component {
  render() {
    return <div id="portada">
      <h2>ORIGINAL DE <b>LITEFLIX</b></h2>
      <h1>Kids at school</h1>
      <br/><br/><br/><br/>
      <p><strong>Ver temporada 1</strong></p>
      <p>Lorem ipsum dolor amet meh freegan snackwave kombucha gastropub. Neutra cray street art freegan hoodie drinking vinegar. Before they sold out copper mug taiyaki knausgaard deep v flannel post-ironic lumbersexual selfies chillwave fanny pack tbh hammock.</p>
    </div>
  }
}

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

class Footer extends React.Component {
  render() {
    return <div class="footer">
      <table>
        <tr>
          <td>Todos los títulos</td>
          <td>Cancelar subscripción</td>
          <td>Ayuda</td>
        </tr>
        <tr>
          <td>Prensa</td>
          <td>Inversores</td>
          <td>RRHH</td>
        </tr>
        <tr>
          <td>Confidencialidad</td>
          <td>Legales</td>
          <td>Cookies</td>
        </tr>
        <tr>
          <td>Contacto</td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <p>© 1997-2018 Liteflix</p>
    </div>
  }
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
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
        <h3>Drama</h3>
        <div class="row__inner">
          <UpcomingMovies />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
