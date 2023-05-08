import React, { Component } from 'react';
 import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './Filter/Filter';
import {Container, TitlePhonebook, TitleContacts, } from './App.styled'

export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  
}
  formSubmitHendler = data => {
    // console.log('********', data.name);
    const newName=data.name
    // console.log('-----', this.state.contacts);
    console.log(this.state.contacts.find(obj => obj.name === newName))
    if (this.state.contacts.find(obj => obj.name === newName)) {
     return alert(` ${newName} is already in contacts`);
    } 
    this.addNowEllContacts(data.name, data.number);
 }
 

  addNowEllContacts = (name, number) => {
    const nowEllArray = {
      name,
      number,
      id: nanoid(),
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, nowEllArray],
    }));
    
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  }

  removeContact = (id) => {
    console.log(id);
    const contacts = this.state.contacts.filter((contact) => {
      return contact.id !== id;
    });
    this.setState({ contacts: contacts });
}

  render() {
    const { filter, contacts } = this.state;
    
    return (
      <Container>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <ContactForm onSubmit={this.formSubmitHendler}/>
        <TitleContacts>Contacts</TitleContacts>
        <Filter value={filter}  onChange={this.changeFilter}/>
        <ListContacts arrayContacts={contacts} search={filter} removeContact={this.removeContact} />
      </Container>
    );
  }
}
