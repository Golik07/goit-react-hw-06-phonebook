import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'myFilterContacts',
  initialState: '',
  reducers: {
    filterContacts: (state, { payload }) => {
      return payload;
    },
  },
});

export const filterReducer = contactsSlice.reducer;
export const { filterContacts } = contactsSlice.actions;
