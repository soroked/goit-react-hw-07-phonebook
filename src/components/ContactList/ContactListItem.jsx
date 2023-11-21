import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';

export const ContactListItem = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p style={{ display: 'inline-block', margin: 0, marginRight: 10 }}>
            {name}: {number}
          </p>
          <button onClick={() => dispatch(deleteContact(id))}>
            <DeleteIcon />
          </button>
        </li>
      ))}
    </>
  );
};
