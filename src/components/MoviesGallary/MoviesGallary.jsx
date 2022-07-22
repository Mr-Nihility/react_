import PropTypes from 'prop-types';
import { MoviesGallaryItem } from './MoviesGallaryItem/MoviesGallaryItem';
//--------------------------------
export const MoviesGallary = ({ films, onDelete, onToggleStatus }) => {
  return (
    <ul>
      {films.map(({ id, title, vote_count, poster_path, watched }) => {
        return (
          <MoviesGallaryItem
          onToggleStatus={onToggleStatus}
            key={id}
            title={title}
            rate={vote_count}
            onDelete={onDelete}
            id={id}
            image={poster_path}
            watched={watched}
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
