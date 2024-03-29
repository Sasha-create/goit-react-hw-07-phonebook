import React from 'react';
import PropTypes from 'prop-types';
import styles from '../ContactListItem/ContactListItem.module.css';

const ContactListItem = ({ name, number }) => {
  return (
    <>
      <span className={styles.contact_name}>{name}: </span>
      <span className={styles.contact_number}>{number}</span>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

ContactListItem.defaultProps = {
  name: 'Hello World',
  number: 123456789,
};
export default ContactListItem;
