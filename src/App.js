import React from 'react';
import './App.css';
import { ReactComponent as Logo } from './liteflix.svg'
import { ReactComponent as Bell } from './bell.svg'
import { ReactComponent as Lupa } from './lupa.svg'
import facebookLogo from './ic-facebook@1x.png'
import instagramLogo from './ic-instagram@1x.png'
import twitterLogo from './ic-twitter@1x.png'
import youtubeLogo from './ic-youtube@1x.png'
import { fetchTopRated, fetchPopular, fetchUpcoming, fetchLatest } from './moviesService'

/*Barra de navegación*/
class NavBar extends React.Component {
  render() {
    return <nav>
      <Logo />
      <a href="index.html">Inicio</a>
      <a href="index.html">Series</a>
      <a href="index.html">Películas</a>
      <a href="index.html">Agregados recientemente</a>
      <a href="index.html">Mi lista</a>
      <a class="btn-modal" href="#open-modal">Agregar película</a>
      <div class="nav-left">
        <Lupa />
        <p>Niños</p>
        <Bell />
      </div>
    </nav>
  }
}

/*Latest movie y modal*/
class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = { movies: [] };
  }

  componentDidMount() {
    fetchLatest()
      .then(movies => this.setState({ movies }));
  }

  render() {
    return <div id="portada">
      <h2>ORIGINAL DE <b>LITEFLIX</b></h2>
      <h1>Kids at school</h1>
      <a class="btn-hero" href="">▶ Reproducir</a><a class="btn-hero" href="">Mi lista</a>
      <p><strong>Ver temporada 1</strong><br/><br/>
      Lorem ipsum dolor amet meh freegan snackwave kombucha gastropub. Neutra cray street art freegan hoodie drinking vinegar. Before they sold out copper mug taiyaki knausgaard deep v flannel post-ironic lumbersexual selfies chillwave fanny pack tbh hammock.</p>
      <UploadModal />
    </div>
  }
}

/*Modal*/
class UploadModal extends React.Component {
  render() {
    return <div id="open-modal" class="modal-window">
      <div>
        <a href="#" title="Close" class="modal-close">X</a>
        <UploadMovie/>
      </div>
    </div>
  }
}

/*Upload movie*/
class UploadMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = { genre: "", title: "" };

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    const movie = {
      title: this.state.title,
      genre: this.state.genre,
    };

    let uploadedMovies = localStorage.getItem("uploadedMovies");

    if (uploadedMovies) {
      uploadedMovies = JSON.parse(uploadedMovies);
      uploadedMovies.push(movie);
      localStorage.setItem("uploadedMovies", JSON.stringify(uploadedMovies));
    } else {
      localStorage.setItem("uploadedMovies", JSON.stringify([movie]));
    }
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeGenre(e) {
    this.setState({ genre: e.target.value });
  }

  render() {
    return <form action="" onSubmit={this.onSubmit}>
      <label htmlFor="poster"><b>Agregar archivo</b></label><br/>
      <input type="file" placeholder="Agregar archivo" name="poster"/><br/><br/>

      <table>
        <tr>
          <td><label htmlFor="title"><b>Nombre de la película</b></label></td>
          <td><label htmlFor="genre"><b>Categoría</b></label></td>
        </tr>

        <tr>
          <td><input type="text" placeholder="Nombre de la película" name="title" onChange={this.onChangeTitle} value={this.state.title}/></td>
          <td><input type="text" placeholder="Categoría" name="genre" onChange={this.onChangeGenre}/></td>
        </tr>
      </table>

      <button type="submit" class="btn-upload">Subir Película</button>
    </form>
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
    </div>
  </div>
};

/*Estructura de categorías*/
const PopularMovie = ({ movie }) => {
  return <div class="tile">
    <div class="tile__media">
      <img class="tile__img__poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}/>
    </div>
  </div>
};

/*Generar filas*/
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

/*Footer*/
class Footer extends React.Component {
  render() {
    return <div class="footer">
      <table class="footerSocialMedia">
        <tr>
          <td><img src={facebookLogo} alt="Facebook" /></td>
          <td><img src={instagramLogo} alt="Instagram" /></td>
          <td><img src={twitterLogo} alt="Twitter" /></td>
          <td><img src={youtubeLogo} alt="Youtube" /></td>
        </tr>
      </table>
      <table class="footerTable">
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
