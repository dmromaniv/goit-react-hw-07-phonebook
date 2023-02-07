import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.searchQuery;
export const selectLoadingStatus = state => state.contacts.isLoading;
export const selectErrorStatus = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    const trimmedFilter = filter.toUpperCase().trim();

    if (trimmedFilter) {
      const filteredContacts = contacts.filter(contact =>
        contact.name.toUpperCase().includes(trimmedFilter)
      );
      return filteredContacts.length !== 0 ? filteredContacts : null;
    }
    return contacts;
  }
);
