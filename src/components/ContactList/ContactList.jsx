import { ContactListItem } from './ContactListItem';

export const ContactList = () => {
  return (
    <ul
      style={{
        padding: 0,
        marginTop: 20,
        height: 480,
        overflow: 'hidden',
        overflowY: 'scroll',
      }}
    >
      <ContactListItem />
    </ul>
  );
};
