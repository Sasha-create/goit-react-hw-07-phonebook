import { createAction } from '@reduxjs/toolkit';
// import shortid from 'shortid';

// export const addContact = createAction('phonebook/addContact', contact => ({
//   payload: { ...contact, id: shortid.generate() },
// }));

// export const deleteContact = createAction('phonebook/deleteContact');

export const addContactRequest = createAction('phonebook/addContactRequest');
export const addContactSuccess = createAction('phonebook/addContactSuccess');
export const addContactError = createAction('phonebook/addContactError');

export const deleteContactRequest = createAction(
  'phonebook/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'phonebook/deleteContactSuccess',
);
export const deleteContactError = createAction('phonebook/deleteContactError');

export const getContactRequest = createAction('phonebook/getContactRequest');
export const getContactSuccess = createAction('phonebook/getContactSuccess');
export const getContactError = createAction('phonebook/getContactError');

export const filterContact = createAction('phonebook/filterContact');
