import { FeaturesGallaryItem } from 'components/FeaturesGallaryItem/FeaturesGallaryItem';
import PropTypes from 'prop-types';
//--------------------------------------------------------------///
export const FeaturesGallary = ({ features }) => {
  console.log(features);
  return (
    <ul>
      {features.map(({ title, text, id }) => {
        return <FeaturesGallaryItem key={id} title={title} text={text} />;
      })}
    </ul>
  );
};

FeaturesGallary.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
