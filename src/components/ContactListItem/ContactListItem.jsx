import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact, onDelete }) => {
  return (
    <>
      <li className={css.listItem}>
        {' '}
        {contact.name}: {contact.number}{' '}
        <button
          className={css.button}
          type="button"
          onClick={() => onDelete(contact.id)}
        >
          DELETE
        </button>
      </li>{' '}
    </>
  );
};
