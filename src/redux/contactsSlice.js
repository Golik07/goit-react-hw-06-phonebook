import { createSlice, nanoid } from '@reduxjs/toolkit';
import { createObjectTodo } from './helpers';

const contactsSlice = createSlice({
  name: 'myConctacts',
  initialState: { contacts: [] },
  reducers: {
    addContacts: {
      prepare: createObjectTodo,
      reducer: (state, { payload }) => {
        state.contacts
          ? state.contacts.push(payload)
          : (state.contacts = [payload]);
      },
    },
    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },
  },
});

export const myContactsReducer = contactsSlice.reducer;

export const { addContacts, deleteContacts } = contactsSlice.actions;
