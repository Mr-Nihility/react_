import PropTypes from 'prop-types';
//---------------------------------------------------//

export const MoviesGallaryItem = ({ id, title, rate, onDelete }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>Votes: {rate}</p>
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
