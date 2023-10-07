import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid'
import css from './App.module.css'
import { GiRotaryPhone} from 'react-icons/gi'

import ContactForm from '../components/ContactForm/ContactForm'
import { Filter } from '../components/Filter/Filter'
import { ContactList } from '../components/ContactList/ContactList'

Notify.init({
  borderRadius: '10px',
  position: 'top',
  width: '100%',
  timeout: 4000,
  clickToClose: true,
  cssAnimationStyle: 'zoom',
});

class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  
  }

  onRemoveContact = (contactId) => {
     this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
    Notify.success('The contact has been successfully removed');
  }
  
  onAddingContact = ({ name, number }) => {
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLoweCase())) {
        return Notify.info(`${name} is already among your contacts`);
    }

    console.log({name, number});
    const contact = {
      name,
      number,
      id: nanoid(),
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    } );
    Notify.success(`${name} has been successfully added to your contacts`);

      
  }
  
  onFilterChange = event => {
    this.setState({ filter: event.currentTarget.value })
  }

  onFilteringContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

  }
    
  render() {

    const { filter, contacts } = this.state;
  
    const filteredContacts = this.onFilteringContacts();

   return (
    <div className={css.container}>
      <div className={css.formContainer}>
         <h1 className={css.mainHeading}>Phonebook <GiRotaryPhone className={ css.icon} /></h1>
         <ContactForm onSubmit={this.onAddingContact} />
        </div>
<div className={css.statisticsContainer}>
  <h2 className={css.contactsHeading}>Contacts</h2>
       <Filter value={filter} onChange={ this.onFilterChange} />
      {contacts.length ? (<ContactList contacts={filteredContacts} onRemoveContact={this.onRemoveContact} />) : (<p className={css.noContactsText}>There are no contacts in your phoneboook</p>)}
    </div>
       </div>
  )
}
}

export default App;