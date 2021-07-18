import React, { Component } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Container from 'components/Container';
import contactsTest from 'data/contactsTest.json';

class App extends Component {
  static defaultProps = {
    contacts: contactsTest,
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  state = {
    contacts: this.props.contacts,
    filter: this.props.filter,
  };

  formAddContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      name: name,
      number: number,
      id: uuidv4(),
    };
    contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
    )
      ? alert(`${name} is already in contacts`)
      : contacts.some(({ number }) => number === contact.number)
      ? alert(`${number} is already in contacts`)
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(filter),
    );
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container title="Phonebook">
        <ContactForm onSubmit={this.formAddContact} />
        <h2 className="title">Contacts</h2>
        <Filter filter={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
