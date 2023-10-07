import css from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, id, onRemoveContact }) => {
  return (
    <li key={id} className={css.listItem}>
      {name}: {number}
      <button className={css.btnDeleteItem} onClick={() => onRemoveContact(id)}>
        Remove
      </button>
    </li>
  );
};
