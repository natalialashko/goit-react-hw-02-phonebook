import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import { LabelInput,  ContactInputForm, NameInput, AddContactButton } from './ContactForm.styled'

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    };

    handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    // console.log(e.currentTarget.value);
    };

     handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state)
    this.resetForm();
    };
    
    resetForm = () => {
    this.setState({ name: '', number: '' });
    // this.setState({ number: '' })
    };


    
  render() {
    return (
            
      <ContactInputForm onSubmit={this.handleSubmit}>
        <LabelInput>Name</LabelInput>
        
        <NameInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInputChange}
        />
       
        <LabelInput>Number</LabelInput>
       
        <NameInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleInputChange}
        />
       
        <AddContactButton type="submit">Add contact</AddContactButton>
        </ContactInputForm>
      
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func
}