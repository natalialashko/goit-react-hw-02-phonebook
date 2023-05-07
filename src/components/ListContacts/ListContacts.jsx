import React from 'react';
import { ContactsListItem } from './ContactsListItem/ContactsListItem';

export const ListContacts = ({arrayContacts, search }) => {

  return (
    <div>
      <ul>
        {arrayContacts.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase())).map(({ id, name, number }) => (
          <ContactsListItem key={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};
