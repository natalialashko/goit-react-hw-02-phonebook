import React from 'react';

export const Filter = ({value, onChange}) => {
  // console.log(arrayContacts);
  return (
    <label>
          Find contacts by name <input type='text' value={value}
          onChange={(onChange)}/>
    </label>
  );
};