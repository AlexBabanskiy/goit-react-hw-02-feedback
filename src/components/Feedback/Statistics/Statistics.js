import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h2>Statistics</h2>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </div>
);

export default Statistics;

StaticRange.PropTypes = {
  good: PropTypes.object,
  neutral: PropTypes.object,
  bad: PropTypes.object,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
