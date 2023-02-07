import { useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Section } from './Section/Section';
import { selectErrorStatus } from 'redux/selectors';

export const App = () => {
  const errorStatus = useSelector(selectErrorStatus);
  return (
    <>
      {errorStatus && <p>Something went wrong: "{errorStatus}"</p>}
      <Section>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </div>
      </Section>
    </>
  );
};
