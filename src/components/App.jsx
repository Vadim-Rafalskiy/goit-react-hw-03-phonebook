import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactList from './ContactList/ContactList';
import PhoneBookFilter from './PhoneBookFilter/PhoneBookFilter';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import contacts from './contacts';

import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [...contacts],
    filter: '',
  };

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  addContact = ({ name, number }) => {
    if (this.isDuplicate(name)) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(prevState => {
      const { contacts } = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      return { contacts: [newContact, ...contacts], name: '', number: '' };
    });
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== id);
      return { contacts: newContacts };
    });
  };

  isDuplicate(name) {
    const normalizeName = name.toLowerCase();
    const { contacts } = this.state;
    const contact = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizeName;
    });
    return Boolean(contact);
  }

  getFilterContacts() {
    const { filter, contacts } = this.state;
    if (!filter.trim()) {
      return contacts;
    }
    const normalizeFilter = filter.toLowerCase();
    const rezult = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizeFilter);
    });
    return rezult;
  }

  render() {
    const { handleFilter, addContact, removeContact } = this;
    const contacts = this.getFilterContacts();

    return (
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h1 className={styles.title}>Phonebook</h1>
          <PhoneBookForm onSubmit={addContact} />
        </div>

        <div className={styles.block}>
          <h2 className={styles.title}>Contacts</h2>
          <PhoneBookFilter handleChange={handleFilter} />
          <ContactList removeContact={removeContact} contacts={contacts} />
        </div>
      </div>
    );
  }
}
