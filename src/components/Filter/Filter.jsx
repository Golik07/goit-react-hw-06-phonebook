import { useDispatch, useSelector } from 'react-redux';
import { Form, Section, Label, Input } from './Filter.styled';
import { filterContacts } from 'redux/filterSlice';

const FilterContact = () => {
  const { filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const changeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(filterContacts(value));
  };

  return (
    <Section>
      <Form>
        <Label>Find contact by name</Label>
        <Input
          type="text"
          name="name"
          value={filter}
          onChange={changeFilter}
          required
        />
      </Form>
    </Section>
  );
};

export default FilterContact;
