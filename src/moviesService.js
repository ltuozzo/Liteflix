import data from './data/data';

/*Traer próximamente*/
const fetchUpcoming = () => fetch(
  "https://api.themoviedb.org/3/movie/upcoming?api_key=6f26fd536dd6192ec8a57e94141f8b20"
)
  .then(res => res.json())
  .then((json) => json.results)

/*Traer mejores rankeados*/
const fetchTopRated = () => fetch(
  "https://api.themoviedb.org/3/movie/top_rated?api_key=6f26fd536dd6192ec8a57e94141f8b20"
)
  .then(res => res.json())
  .then((json) => json.results)

/*Traer populares*/
const fetchPopular = () => fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"
)
  .then(res => res.json())
  .then((json) => json.results)

/*Traer generos*/
const fetchGenres = () => fetch(
  "https://api.themoviedb.org/3/genre/movie/list?api_key=6f26fd536dd6192ec8a57e94141f8b20"
)
  .then(res => res.json())
  .then((json) => json.results)

/*Concatenar las películas locales y de la API en un json*/
export listaPeliculas() {
  
}
