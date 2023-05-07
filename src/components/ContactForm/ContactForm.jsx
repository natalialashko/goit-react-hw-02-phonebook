import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

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
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <br />
        <label>Number</label>
        <br />
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleInputChange}
        />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
