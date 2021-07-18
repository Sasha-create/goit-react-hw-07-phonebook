import React from 'react'; //при закоментированом варианте нужно сюда дописать { Component }
import style from '../ContactForm/ContactForm.module.css';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phoneBook/phonebook-operations';

const ContactForm = ({
  onSetName,
  onAddContact,
  name,
  number,
  addContact,
  reset,
}) => {
  const handleAddContact = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };
    addContact(contact);
    reset();
  };

  return (
    <form className={style.form} onSubmit={handleAddContact}>
      <label style={{ marginBottom: '10px' }}>
        Name
        <input
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          placeholder="Enter contact name"
          required
          onInput={onSetName}
          // onChange={options.handleChange}
        />
      </label>
      <label className={style.labelPhone}>
        Phone
        <input
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          placeholder="Enter contact phone"
          required
          onInput={onSetName}
          // onChange={options.handleChange}
        />
      </label>
      <button type="submit" className={style.button}>
        Отправить
      </button>
    </form>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    addContact: contact => dispatch(addContact(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

