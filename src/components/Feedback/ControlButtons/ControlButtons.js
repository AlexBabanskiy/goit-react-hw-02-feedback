import React from 'react';
import { FeedbackButton } from './ControlButtons.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({ onIncrement, options }) {
  return (
    <div>
      {options.map(option => (
        <FeedbackButton key={option} onClick={() => onIncrement(option)}>
          {option}
        </FeedbackButton>
      ))}
    </div>
  );
}

StaticRange.PropTypes = {
  onIncrement: PropTypes.func,
  options: PropTypes.array,
};
