import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAppState {
	answers: string[];
	chosen_answer?: string;
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
	clicked: boolean;
	id: number;
}

interface updateChosenAnswer {
	id: number;
	answer: string;
}

let questionsSkeleton: IAppState[];

export const questionsSlice = createSlice({
	name: "questions",
	initialState: {
		questions: [{}] as IAppState[],
	},
	reducers: {
		setQuestions: (state, action: PayloadAction<IAppState[]>) => {
			state.questions = action.payload;
		},
	},
});

export const { setQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
