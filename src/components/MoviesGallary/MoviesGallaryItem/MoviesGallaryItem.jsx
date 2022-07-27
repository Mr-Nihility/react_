import PropTypes from 'prop-types';
import {
  MovieItem,
  Wrapper,
  MovieSpan,
  MovieButton,
} from './MoviesGallaryItem.style';
//---------------------------------------------------//

export const MoviesGallaryItem = ({
  id,
  image,
  title,
  rate,
  onDelete,
  watched,
  onToggleStatus,
  handleOpenModal,
}) => {
  return (
    <MovieItem>
      {/* <img
        src={`https://image.tmdb.org/t/p/w500${image}`}
        width="350"
        alt={title}
      /> */}
      <Wrapper>
        <h2>{title}</h2>
        <p>Votes: {rate}</p>
        <p>
          Watched:{' '}
          <MovieSpan onClick={() => onToggleStatus(id)}>
            {String(watched)}
          </MovieSpan>
        </p>
        <MovieButton type="button" onClick={() => onDelete(id)}>
          Delete
        </MovieButton>
        <button type='button' onClick={()=> handleOpenModal(image)}>Show poster</button>
      </Wrapper>
    </MovieItem>
  );
};

MoviesGallaryItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};
