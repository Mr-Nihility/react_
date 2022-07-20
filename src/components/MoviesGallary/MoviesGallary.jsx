import PropTypes from 'prop-types';
import { MoviesGallaryItem } from './MoviesGallaryItem/MoviesGallaryItem';
//--------------------------------
export const MoviesGallary = ({ films, onDelete }) => {
  return (
    <ul>
      {films.map(({ id, title, vote_count, poster_path }) => {
        return (
          <MoviesGallaryItem
            key={id}
            title={title}
            rate={vote_count}
            onDelete={onDelete}
            id={id}
            image={poster_path}
          />
        );
      })}
    </ul>
  );
};

MoviesGallary.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      vote_count: PropTypes.number.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
