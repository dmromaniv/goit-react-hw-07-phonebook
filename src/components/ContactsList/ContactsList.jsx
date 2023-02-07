import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ContactItem } from 'components/ContactItem/ContactItem';
import s from './ContactsList.module.css';

import { fetchContacts } from 'redux/operations';
import {
  selectContacts,
  selectFilteredContacts,
  selectLoadingStatus,
} from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, contacts.length]);

  return (
    <>
      {isLoading && <div>Loading contacts...</div>}
      {filteredContacts ? (
        <ul className={s.list}>
          {filteredContacts.map(({ id, name, phone }) => (
            <ContactItem key={id} id={id} name={name} number={phone} />
          ))}
        </ul>
      ) : (
        <p>Sorry, we didn't find any contact</p>
      )}
    </>
  );
};
