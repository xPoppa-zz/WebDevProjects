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
		questions: [
			{
				answers: [""],
				chosen_answer: "",
				category: "",
				correct_answer: "",
				difficulty: "",
				incorrect_answers: [""],
				question: "",
				type: "",
				clicked: false,
				id: 0,
			},
		] as IAppState[],
	},
	reducers: {
		setQuestions: (state, action: PayloadAction<IAppState[]>) => {
			state.questions = action.payload;
		},
		updateChosenAnswer: (state, action: PayloadAction<any>) => {
			state.questions[action.payload.id].chosen_answer = action.payload.answer;
		},
	},
});

export const { setQuestions, updateChosenAnswer } = questionsSlice.actions;

export default questionsSlice.reducer;
