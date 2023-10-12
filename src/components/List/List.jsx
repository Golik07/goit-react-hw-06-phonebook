import { deleteContacts } from 'redux/contactsSlice';
import Item from './Item/Item';
import { useDispatch, useSelector } from 'react-redux';

const List = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state);

  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts.map(({ id, number, name }) => (
        <Item
          id={id}
          key={id}
          name={name}
          number={number}
          handleDelete={handleDelete}
        ></Item>
      ))}
    </ul>
  );
};

export default List;
