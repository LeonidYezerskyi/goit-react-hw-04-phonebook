import React from 'react';
import { nanoid } from "nanoid";

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';

export class App extends React.Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (!contacts) return;
    this.setState({
      contacts: contacts
    })
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContact = (name, number) => {
    if (this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contact list.`);
      return;
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number, id: nanoid() }]
    }))
  }

  onChangeFilter = e => {
    this.setState({
      filter: e.target.value
    });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(this.state.filter.toLowerCase())
    })
  }

  deleteContact = e => {
    const toDeleteContactId = e.target.value;

    this.setState(prevState => {
      const contacts = prevState.contacts;
      const newContacts = contacts.filter(contact => {
        return contact.id !== toDeleteContactId
      });

      return ({
        contacts: newContacts
      })
    })
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts(contacts, filter);

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 15,
          color: '#010101',
        }}
      >
        <div className={css.paper}>
          <h1 className={css.title}> Phonebook</h1>
          <ContactForm addContact={this.addContact} />

          <h2 className={css.title}>Contacts</h2>
          <Filter onChangeFilter={this.onChangeFilter} filter={filter} />
          <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
        </div >
      </div >
    );
  }
}

  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  //   name: '',
  //   number: ''
  // }

  // onChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  // onSubmitForm = e => {
  //   e.preventDefault();
  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, { name: this.state.name, number: this.state.number, id: nanoid() }]
  //   }))
  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({
  //     name: '',
  //     number: ''
  //   });
  // };

  // onChangeFilter = e => {
  //   this.setState({
  //     filter: e.target.value
  //   });
  // };

  // getFilteredContacts = () => {
  //   return this.state.contacts.filter(({ name }) => {
  //     return name.toLowerCase().includes(this.state.filter.toLowerCase())
  //   })
  // }
  // render() {
  //   const { name, number, filter } = this.state;
  //   console.log(this.state);
  //   return (
  //     <div
  //       style={{
  //         height: '100vh',
  //         display: 'flex',
  //         flexDirection: 'column',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         fontSize: 30,
  //         color: '#010101'
  //       }}
  //     >
  //       <div>
  //         <h1>Phonebook</h1>
  //         <form onSubmit={this.onSubmitForm}>
  //           <label>
  //             Name
  //             <input
  //               type="text"
  //               name="name"
  //               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //               onChange={this.onChange}
  //               value={name}
  //               required
  //             />
  //           </label>
  //           <label>
  //             Number
  //             <input
  //               type="tel"
  //               name="number"
  //               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  //               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  //               onChange={this.onChange}
  //               value={number}
  //               required
  //             />
  //           </label>

  //           <button type="submit">Add contact</button>
  //         </form>
  //       </div>

  //       <div>
  //         <h2>Contacts</h2>
  //         <label>
  //           Find contacts by name
  //           <input
  //             type="text"
  //             name="filter"
  //             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  //             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  //             onChange={this.onChangeFilter}
  //             value={filter}
  //             required
  //           />
  //         </label>
  //         <ul>
  //           {this.getFilteredContacts().map(({ id, name, number }) => {
  //             return <li key={id}>{name}: {number}</li>
  //           })}
  //         </ul>
  //       </div>

  //     </div >
  //   );
  // }