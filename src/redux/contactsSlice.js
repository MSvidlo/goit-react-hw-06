import { createSlice, nanoid, createSelector } from "@reduxjs/toolkit";
import { CONSTANTS } from './constants.js';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const ontactsSlice = createSlice({
    name: 'contacts',
   initialState: { items: CONSTANTS.CONTACTS_INIT },
    reducers: {
        addContact: (state, action) => {
                state.items.    push(action.payload);
            },

            deleteContact(state, action) {
state.items.splice(state.items.indexOf(action.payload), 1);
            },
        },
    });
const persistContactsConfig = {
  key: 'root',
  whitelist: ['items'],
  storage,
};

export const { addContact, deleteContact } = ontactsSlice.actions;
export const contactReducer = ontactsSlice.reducer;
export const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactReducer
);