import PropTypes from 'prop-types';

const Notification = ({ message }) => <p>{message}</p>;

export default Notification;

StaticRange.PropTypes = {
  message: PropTypes.string,
};
