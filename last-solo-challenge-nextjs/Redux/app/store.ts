import { configureStore } from "@reduxjs/toolkit";

import apiOptionsReducer from "../features/apiOptions/apiOptionsSlice";
import questionsReducer from "../features/Questions/questionsSlice";
import responseCodeReducer from "../features/responseCode/responseCodeSlice";

const store = configureStore({
	reducer: {
		apiOptions: apiOptionsReducer,
		questions: questionsReducer,
		responseCode: responseCodeReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
