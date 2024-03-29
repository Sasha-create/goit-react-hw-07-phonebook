import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/phonebook/phonebook-operations';
import ElementContactList from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';
import { fetchContacts } from '../../redux/phonebook/phonebook-operations';

class ContactList extends Component {
  static propTypes = {
    onFetchContacts: PropTypes.func,
    contacts: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.onfetchContacts();
  }

  render() {
    return (
      <>
        {this.props.isLoadingContacts && <h1>...Loading</h1>}

        <ul className={styles.contact_list}>
          {this.props.contacts.map(({ id, name, number }) => (
            <li key={id} className={styles.contact_item}>
              <ElementContactList name={name} number={number} />
              <button
                type="button"
                onClick={() => {
                  this.props.onClick(id);
                }}
                className={styles.item_button}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter, loading } }) => ({
  contacts: getVisibleContacts(items, filter),
  isLoadingContacts: loading,
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(deleteContact(id)),
  onfetchContacts: () => dispatch(fetchContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
