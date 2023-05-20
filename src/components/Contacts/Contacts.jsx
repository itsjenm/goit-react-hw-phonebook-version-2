import styled from './contacts.module.css'

// a function that sorts the users and renders them into contacts
export default function Contacts(props) {
   
    const sortedContacts = props.contacts.sort((a, b) => {
       return a.name.localeCompare(b.name)
       })

    

    return (
        <div>
            <ul>
                {sortedContacts.map((user) => (
                    <li key={user.id}>
                        {user.name}: {user.number}
                        <button type="submit" className={styled.delete_button}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}