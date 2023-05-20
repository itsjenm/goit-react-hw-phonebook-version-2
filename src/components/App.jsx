import Phonebook from './Phonebook/Phonebook';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

//an application that stores your phonebook contacts

export const App = () => {
  //set global state for Contacts
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  // console.log(contacts)

  //adds new user to phonebook
  const addUser = user => {
    // console.log(user)
    //adds a new id every time a new user is added
    user.id = nanoid();
    setContacts([...contacts, user]);
  };



  return (
    <div>
      <h1 style={{ marginLeft: '10px' }}>Phonebook</h1>
      <Phonebook addUser={addUser} contacts={contacts} />

      <h2 style={{ marginLeft: '10px' }}>Contacts</h2>
      {contacts ? (
        <Filter contacts={contacts} setContacts={setContacts} />
      ) : (
        <Contacts contacts={contacts} />
      )}
    </div>
  );
};