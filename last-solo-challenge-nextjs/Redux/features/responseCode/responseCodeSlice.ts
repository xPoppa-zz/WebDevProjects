import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const responseCodeSlice = createSlice({
	name: "questions",
	initialState: {
		response_code: 0,
	},
	reducers: {
		setResponseCode: (state, action: PayloadAction<number>) => {
			state.response_code = action.payload;
		},
	},
});

export const { setResponseCode } = responseCodeSlice.actions;

export default responseCodeSlice.reducer;
