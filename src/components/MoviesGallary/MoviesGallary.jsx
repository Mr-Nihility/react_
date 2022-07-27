import PropTypes from 'prop-types';
import { MoviesGallaryItem } from './MoviesGallaryItem/MoviesGallaryItem';
import { MoviesGallaryStyles } from './MoviesGallary.styles';
//--------------------------------
export const MoviesGallary = ({ films, onDelete, onToggleStatus,handleOpenModal }) => {
  return (
    <MoviesGallaryStyles>
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
            handleOpenModal={handleOpenModal}
          />
        );
      })}
    </MoviesGallaryStyles>
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
