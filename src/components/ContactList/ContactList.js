import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './contactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles['contact-list']}>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

export default ContactList;
