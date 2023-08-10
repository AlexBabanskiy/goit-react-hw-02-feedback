import React from 'react';

const Filter = ({ value, onChange }) => (
  <div>
    <label>
      <p>Find contacts by name:</p>
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default Filter;
