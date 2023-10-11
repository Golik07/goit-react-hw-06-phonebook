import { createSlice } from '@reduxjs/toolkit';
import { createObjectTodo } from './helpers';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

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

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  myContactsReducer
);

export const { addContacts, deleteContacts } = contactsSlice.actions;
