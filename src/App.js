import React from 'react';
import './App.css';
import data from './data/data';
import MovieCard from './movieCard';
import listaPeliculas from './moviesService'

class UpcomingMovies extends React.Component {
  constructor(props) {
    super(props);

    this.state = { movies: [] };
  }

  /*Crear nuevo array con las películas correspondientes a esta row*/
  componentDidMount() {
    data.movieProperties.map( movies => movies.push((data.movieProperties,i) => (data.movieProperties[i].proximamente) ? data.movieProperties));
  }

  /*Crear cada película individual*/
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

  /*Crear nuevo array con las películas correspondientes a esta row*/
  componentDidMount() {
    data.movieProperties.map( movies => movies.push(data.movieProperties => (data.movieProperties.mejorRankeada) ? data.movieProperties));
  }

  /*Crear cada película individual*/
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

  /*Crear nuevo array con las películas correspondientes a esta row*/
  componentDidMount() {
    data.movieProperties.map( movies => movies.push(data.movieProperties => (data.movieProperties.popular) ? data.movieProperties));
  }

  /*Crear cada película individual*/
  render() {
    return React.createElement(
      "div",
      {},
      this.state.movies.map(movie => React.createElement(PopularMovie, { movie }))
    );
  }
}

class MovieSlider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movieProperties: data.movieProperties,
      movieProp: data.movieProperties[0]
    }
  }

  /*Botónes para mover la fila*/
  nextMovie = () => {
    const newIndex = this.state.movieProp.index+1;
    this.setState({
      movieProp: data.movieProperties[newIndex]
    })
  }

  prevMovie = () => {
    const newIndex = this.state.movieProp.index-1;
    this.setState({
      movieProp: data.movieProperties[newIndex]
    })
  }

  /*Crear fila de películas*/
  render() {
    const {movieProperties, movieProp} = this.state;
    return (
      <div>
        <button
          onClick={() => this.nextMovie()}
          disabled={movieProp.index === data.movieProperties.length-1}
        >Next</button>
        <button
          onClick={() => this.prevMovie()}
          disabled={movieProp.index === 0}
        >Prev</button>
        <div className="col">
          <div className={`cards-slider`}>
            <div className="cards-slider-wrapper" style={{
              'transform': `translateX(-${movieProp.index*(100/movieProperties.length)}%)`
            }}>
            {
              movieProperties.map(movieProp => <MovieCard key={movieProp._id} movieProp={movieProp} />)
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*App*/
function App() {
  return (
    <div className="App">
      <div class="row">
        <listaPeliculas />
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
