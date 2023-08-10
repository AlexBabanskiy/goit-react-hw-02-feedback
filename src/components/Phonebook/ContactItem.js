import React from 'react';
import DeleteButton from './DeleteButton';

const ContactItem = ({ id, name, number, onDelete }) => (
  <li key={id}>
    {name}: {number} <DeleteButton onClick={() => onDelete(id)} />
  </li>
);

export default ContactItem;
