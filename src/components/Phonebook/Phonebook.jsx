import { useState } from 'react';
import styled from './phonebook.module.css';


//A function that adds a user into the contact list
export default function Phonebook(props) {
  // console.log(props)
  //set state for individual user information (id, name, number)
  const [userData, setUserData] = useState({
    id: null,
    name: '',
    number: '',
  });


  //change handler
  function userChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    

    setUserData({
        ...userData, [name]: value
    })
    
  }


  //submit form handler - checks whether contact is already listed
  function submitHandler(event) {
    event.preventDefault();
    let isThere = false;
    const fullContactList = props.contacts
    fullContactList.map((data) => {
      // console.log(data.name)
      if(data.name === userData.name) {
        isThere = true
        return alert(`${userData.name} is already in contacts`)
      }
      return
    })
    if(isThere === false) {
      props.addUser(userData)
    }
  }

 
  

  return (
    <form className={styled.phonebook_form} onSubmit={submitHandler}>
      <div className={styled.phonebook_container}>
        <label htmlFor="name" className={styled.name_label}>
          Name
        </label>
        <input
          type="text"
          value={userData.name}
          onChange={userChangeHandler}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
        />
        <label className={styled.number_label}>Number</label>
        <input
          type="tel"
          name="number"
          value={userData.number}
          onChange={userChangeHandler}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={styled.addcontact_button} >Add contact</button>
      </div>
    </form>
  );
}
