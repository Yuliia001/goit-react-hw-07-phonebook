import { ListItem, Text, Title } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, getContacts } from 'redux/contacts/sliceContacts';
import { getFilter } from 'redux/filters/slice';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Title>Contacts</Title>
      {filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <ListItem key={id}>
              <p> {name} :</p>
              <span> {number}</span>
              <button
                type="button"
                onClick={() => dispatch(deleteContacts(id))}
              >
                Delete
              </button>
            </ListItem>
          ))}
        </ul>
      ) : (
        <Text>Contact list ist empty!</Text>
      )}
    </>
  );
};
