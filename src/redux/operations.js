import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64523c76a2860c9ed405b95c.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk(
	"contacts/fetchAll",
	async (_, thunkAPI) => {
	try {
		const response = await axios.get("/contacts")
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error);
	}
});

export const addContact = createAsyncThunk(
	"contacts/addContact",
	async (contact, thunkAPI) => {
		try {
			const response = await axios.post("/contacts", contact);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
});

export const removeContact = createAsyncThunk(
	"contacts/removeContact",
	async (contactId, thunkAPI) => {
		try {
			const response = await axios.delete(`/contacts/${contactId}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
});