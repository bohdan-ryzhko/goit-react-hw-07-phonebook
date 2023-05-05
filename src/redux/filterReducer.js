import { createSlice } from "@reduxjs/toolkit";

export const filterReducer = createSlice({
	name: "filter",
	initialState: "",
	reducers: {
		filteredByName(state, action) {
			state = action.payload;
			return state;
		}
	}
});

export const { filteredByName } = filterReducer.actions;
export default filterReducer.reducer;
