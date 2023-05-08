import React, { Component } from 'react';

import { Contacts, ItemContacts, InfContacts, DeleteBtn } from './ListContacts.styled';


export class ListContacts extends Component {
  render() {
    return (
      <Contacts>
        <ul>
          {this.props.arrayContacts
            .filter(item =>
              item.name.toLowerCase().includes(this.props.search.toLowerCase())
            )
            .map(({ id, name, number }) => (
              <ItemContacts key={id}>
                <InfContacts>
                  <div>
                    <span>{name}: </span>
                    <span>{number}</span>
                  </div>
                  <DeleteBtn onClick={() => this.props.removeContact(id)}>
                    Delete
                  </DeleteBtn>
                </InfContacts>
              </ItemContacts>
            ))}
        </ul>
      </Contacts>
    );
  }
}
