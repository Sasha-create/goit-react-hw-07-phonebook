import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  fetchContactSuccess,
  fetchContactRequest,
  fetchContactError,
  addContactError,
  addContactSuccess,
  addContactRequest,
  deleteContactError,
  deleteContactSuccess,
  deleteContactRequest,
  changeFilter,
} from './phonebook-actions';

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
// const items = createReducer([], {
//   [fetchContactSuccess]: (_, { payload }) => payload,
//   [addContactSuccess]: (state, { payload }) => {
//     if (state.map(contact => contact.name).includes(payload.name)) {
//       return alert(`${payload.name} is already exist`);
//     }
//     return [...state, payload];
//   },
//   [deleteContactSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
