import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    });
    builder.addCase(fetchContacts.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    builder.addCase(addContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items.push(payload);
    });
    builder.addCase(addContact.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    builder.addCase(deleteContact.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(contact => contact.id !== payload);
    });
    builder.addCase(deleteContact.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });

    builder.addMatcher(
      action => action.type.endsWith('/pending'),
      state => {
        state.isLoading = true;
      }
    );
  },
});

export const contactsReducer = contactsSlice.reducer;
