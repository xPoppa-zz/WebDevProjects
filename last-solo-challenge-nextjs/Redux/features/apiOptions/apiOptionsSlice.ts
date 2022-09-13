import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface APIOptions {
	amount: string;
	difficulty: string;
	type_question: string;
}

export const apiOptionsSlice = createSlice({
	name: "apiOptions",
	initialState: {
		apiOptions: {
			amount: "amount=10",
			difficulty: "",
			type_question: "",
			category: "",
			category_number: "",
		},
	},
	reducers: {
		setAmount: (state, action: PayloadAction<string>) => {
			state.apiOptions.amount = action.payload;
		},
		setDifficulty: (state, action: PayloadAction<string>) => {
			state.apiOptions.difficulty = action.payload;
		},
		setTypeQuestion: (state, action: PayloadAction<string>) => {
			state.apiOptions.type_question = action.payload;
		},
		setCategory: (state, action: PayloadAction<string>) => {
			state.apiOptions.category = action.payload;
		},
		setCategoryNumber: (state, action: PayloadAction<string>) => {
			state.apiOptions.category_number = action.payload;
		},
	},
});

export const {
	setAmount,
	setDifficulty,
	setTypeQuestion,
	setCategory,
	setCategoryNumber,
} = apiOptionsSlice.actions;

export default apiOptionsSlice.reducer;
