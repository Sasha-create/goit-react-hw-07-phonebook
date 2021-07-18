import { useEffect } from 'react';
import style from '../ContactList/ContactList.module.css';
import getFilteredContacts from '../../helpers/filterContacts';

const ContactList = ({ contacts, deleteContact, filter, onContactFetch }) => {
  const contactsArr = getFilteredContacts(contacts, filter);
  useEffect(() => {
    onContactFetch();
  }, [onContactFetch]);
  return (
    <div>
      <h2>Contacts</h2>
      <ul className={style.list}>
        {contactsArr.map(({ name, number, id }) => (
          <li key={id}>
            <p>Name:{name}</p>
            <p>Number:{number}</p>
            <button id={id} onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
