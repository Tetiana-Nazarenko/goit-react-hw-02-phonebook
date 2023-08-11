import { nanoid } from 'nanoid';
import { Component } from 'react';

import { Contacts } from './Contacts/Contacts.jsx';

export class App extends Component {
  state = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  //*** METHODS */

  // handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };

  handleChangeNumber = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { contacts, name, number } = this.state;

    if (name && number) {
      const newContact = { id: nanoid(), name, number };

      const findName = contacts.find(
        contact => contact.name === newContact.name
      );

      if (!findName) {
        this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
          name: '',
          number: '',
        }));
      } else {
        alert(`${name} is already in contacts!`);
      }
    }
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  handleDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(name => name.id !== id),
      };
    });
  };

  //*** RENDER */
  render() {
    const { contacts, name, number, filter } = this.state;

    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChangeName}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number:
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChangeNumber}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact </button>
        </form>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            name="name"
            value={filter}
            onChange={this.handleFilter}
          />
        </label>
        <Contacts
          contacts={filterContacts}
          onDelete={this.handleDelete}
        ></Contacts>
      </div>
    );
  }
}
