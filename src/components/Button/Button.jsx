import PropTypes from 'prop-types';
//------------------------------------------------------------------------//
const Button = ({ textContent, handlerClick }) => {
  return (
    <button type="button" onClick={handlerClick}>
      {textContent}
    </button>
  );
};

export { Button };

Button.propTypes = {
  textContent: PropTypes.string.isRequired,
  handlerClick: PropTypes.func.isRequired,
};
