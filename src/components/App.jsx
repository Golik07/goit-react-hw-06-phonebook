import ContactForm from './Form';
import List from './List/List';
import FilterContact from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, deleteContacts } from 'redux/contactsSlice';
import { filterContacts } from '../redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state);

  const createContacts = value => {
    const isAlreadyExist = contacts.find(
      contact => contact.name === value.name
    );
    if (isAlreadyExist) {
      return alert(`${value.name} is already in contacts`);
    }

    dispatch(addContacts(value));
  };

  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

  const changeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(filterContacts(value));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm onAddContact={createContacts} />
      <h2>Contacts</h2>
      <FilterContact onChange={changeFilter} value={filter} />
      <List contacts={visibleContacts} handleDelete={handleDelete} />
    </div>
  );
};
