import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {},
    reducers: {
        addTopic: (state, action) => {
            state[action.payload.id] = action.payload;
            state[action.payload.id].quizIds = [];
        },
        addQuizId: (state, action) => {
            const test = action.payload;
            const test2 = state;
            state[action.payload.topicId].quizIds.push(action.payload.id);
        }
    }
})

export const selectTopics = (state) => state.topics;
export const {addTopic, addQuizId} = topicsSlice.actions;
export default topicsSlice.reducer;