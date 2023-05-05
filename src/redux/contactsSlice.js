import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "./operations";

const contactsSlice = createSlice({
	name: "contacts",
	initialState: {
		items: [],
		isLoading: false,
		error: null,
	},
	extraReducers: {
		//fecth contacts
		[fetchContacts.pending] (state) {
			state.isLoading = true
		},

		[fetchContacts.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			state.items = action.payload;
		},

		[fetchContacts.rejected](state, action) {
			state.isLoading = false;
			state.error = action.payload;
		},

		//add contact
		[addContact.pending](state) {
			state.isLoading = true
		},

		[addContact.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			state.items.push(action.payload);
		},

		[addContact.rejected](state, action) {
			state.isLoading = false;
			state.error = action.payload;
		},

		//remove contact
		[removeContact.pending](state) {
			state.isLoading = true
		},

		[removeContact.fulfilled](state, action) {
			state.isLoading = false;
			const findIndex = state.items.find(contact => contact.id === action.payload.id);
			state.items.splice(findIndex, 1);
		},

		[removeContact.rejected](state, action) {
			state.isLoading = false;
			state.error = action.payload;
		}
	}
});

export const contactsReducer = contactsSlice.reducer;
