import PropTypes from 'prop-types';
//-------------------------------------------------------------//
export const FeaturesGallaryItem = ({ title, text }) => {
  return (
    <li>
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  );
};

FeaturesGallaryItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
