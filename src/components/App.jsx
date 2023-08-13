import { nanoid } from 'nanoid';
import { Component } from 'react';

import { Contacts } from './Contacts/Contacts.jsx';

import { ContactForm } from './ContactForm/ContactForm.jsx';

import { Filter } from './Filter/Filter.jsx';

// Стилизация
import { Layout, HeadTitle, ContactsTitle } from './Layout.js';
import { GlobalStyle } from './GlobaleStyle.js';

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
    // name: '',
    // number: '',
  };

  //*** METHODS */

  // handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // handleChangeName = event => {
  //   this.setState({ name: event.target.value });
  // };

  // handleChangeNumber = event => {
  //   this.setState({ number: event.target.value });
  // };

  ///*** */
  // handleSubmit = event => {
  //   event.preventDefault();

  //   const { contacts, name, number } = this.state;

  //   if (name && number) {
  //     const newContact = { id: nanoid(), name, number };

  //     const findName = contacts.find(
  //       contact => contact.name === newContact.name
  //     );

  //     if (!findName) {
  //       this.setState(prevState => ({
  //         contacts: [...prevState.contacts, newContact],
  //         // name: '',
  //         // number: '',
  //       }));
  //     } else {
  //       alert(`${name} is already in contacts!`);
  //     }
  //   }
  //   this.reset();
  // };

  addContact = contact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }

    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };

  //*** */ Изменение значения фильтра

  handleFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };
  //*** Удаление контактов
  handleDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(name => name.id !== id),
      };
    });
  };

  //*** RENDER */
  render() {
    const { contacts, filter } = this.state;

    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <Layout>
        <HeadTitle>Phonebook</HeadTitle>
        <ContactForm onSubmit={this.addContact} />

        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter} onChangeFilter={this.handleFilter} />

        <Contacts
          contacts={filterContacts}
          onDelete={this.handleDelete}
        ></Contacts>
        <GlobalStyle />
      </Layout>
    );
  }
}
