
import PropTypes from 'prop-types';

const ListHeader = ({ title }) => {
  return (
    <div>
      {title}
    </div>
  );
};

export default ListHeader;

ListHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

