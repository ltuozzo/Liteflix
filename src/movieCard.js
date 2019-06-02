import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({property}) => {
  const {_id, index, name, image, imagePopulares, genreId, genreName, proximamente, mejorRankeada, popular} = property;
  return (
    return <div class="tile">
      <div class="tile__media">
        <img class="tile__img" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}/>
      </div>
      <div class="tile__details">
        <div class="tile__title">
          {movie.title}
        </div>
        <div class="tile__genre">
          {movie.genre_ids}
        </div>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
    property: PropTypes.object.isRequired
}

export default MovieCard;
