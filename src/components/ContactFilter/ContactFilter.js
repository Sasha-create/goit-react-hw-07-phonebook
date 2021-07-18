import React from 'react';
import { connect } from 'react-redux';
// import style from '../ContactFilter/contactFilter.module.css';
import { filterContact } from '../../redux/phoneBook/phonebook-actions';

const ContactFilter = ({ onSetFilter, filter }) => (
  <>
    <label>
      <p>Search for contacts</p>
      <input onInput={onSetFilter} type="text" name="filter" value={filter} />
    </label>
  </>
);

const mapStateToProps = state => ({
  filter: state.phonebookFilter,
});

const mapDispatchToProps = dispatch => ({
  onSetFilter: ({ target: { value } }) => dispatch(filterContact(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
