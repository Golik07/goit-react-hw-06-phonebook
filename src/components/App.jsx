import ContactForm from './Form';
import List from './List/List';
import FilterContact from './Filter/Filter';

export const App = () => {
  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterContact />
      <List />
    </div>
  );
};
