import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicsSlice';

export const deployNewQuiz = (quiz) => {
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizId(quiz));
    }
}

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {},
    reducers: {
        addQuiz: (state, action) => {
            state[action.payload.id] = action.payload;
        }
    }
})

export const selectQuizzes = (state) => state.quizzes;
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;