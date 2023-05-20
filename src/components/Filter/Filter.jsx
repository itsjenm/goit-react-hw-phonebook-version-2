import styled from './filter.module.css';
import { useState } from 'react';

export default function Filter(props) {
  const [search, setSearch] = useState('');

  // console.log(contact);

  const filtered = !search
    ? props.contacts
    : props.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(search.toLowerCase());
      });

  function handleDelete(event) {
    // console.log(event)
    const idToPop = props.contacts.filter(thisContact => {
      return thisContact.id !== event.id;
    });
    // console.log(idToPop)
    props.setContacts(idToPop)
  }

  return (
    <div className={styled.filter_container}>
      <label className={styled.search_title}>Find contacts by name</label>
      <input
        type="search"
        value={search}
        onChange={event => {
          setSearch(event.target.value);
        }}
      />
      <ul>
        {filtered.map(contact => {
          return (
            <li key={contact.id} className={styled.list_items}>
              {contact.name}: {contact.number}
              <button
                type="submit"
                className={styled.delete_button}
                onClick={() => handleDelete(contact)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
