import PropTypes from 'prop-types';
//---------------------------------------------------//

export const MoviesGallaryItem = ({ id, image, title, rate, onDelete, watched, onToggleStatus  }) => {
  return (
    <li>
      <img
        src={`https://image.tmdb.org/t/p/w500${image}`}
        width="350"
        alt={title}
      />
      <h2>{title}</h2>
      <p>Votes: {rate}</p>
      <p>Watched: <span onClick={()=>onToggleStatus(id)}>{String(watched)}</span></p>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

MoviesGallaryItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};
