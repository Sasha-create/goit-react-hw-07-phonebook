import { connect } from 'react-redux';
import {
  deleteContact,
  contactFetch,
} from '../../redux/phoneBook/phonebook-operations';
import ContactList from './ContactList';
const mapStateToProps = state => ({
  contacts: state.phonebookContacts,
  filter: state.phonebookFilter,
});

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(deleteContact(id)),
    onContactFetch: () => dispatch(contactFetch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
