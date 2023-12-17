import PropTypes from 'prop-types';

const ProgressBar = ({ progress }) => {
  const colorMap = [
    "rgb(20, 135, 100)",
    "rgb(80, 36, 45)",
    "rgb(60, 200, 360)",
    "rgb(70, 100, 135)",
  ];

  const color = colorMap[Math.floor(Math.random() * 4)];

  return (
    <div className="bg-gray-100 w-56 h-4 rounded-xl overflow-hidden">
      <div style={{ backgroundColor: color, width: `${progress}%` }} className="h-full"></div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;

