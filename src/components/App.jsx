import { ContactForm } from './Form/ContactForm';
import { ContactList } from './Contacts/ContactsList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <ContactForm />
      <Filter />
      {isLoading && !error}
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
};
