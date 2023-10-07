import css from './ContactList.module.css';
import { ContactListItem } from '../../components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onRemoveContact={onRemoveContact}
          />
        );
      })}
    </ul>
  );
};
