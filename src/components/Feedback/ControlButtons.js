import React from 'react';

export const GoodButton = ({ onIncrement }) => (
  <button onClick={onIncrement}>Good</button>
);

export const NeutralButton = ({ onIncrement }) => (
  <button onClick={onIncrement}>Neutral</button>
);

export const BadButton = ({ onIncrement }) => (
  <button onClick={onIncrement}>Bad</button>
);
