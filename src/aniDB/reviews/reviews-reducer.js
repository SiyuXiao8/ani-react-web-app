import {createSlice} from "@reduxjs/toolkit";
import {
    createReviewThunk, deleteReviewByUserThunk,
    deleteReviewThunk,
    findAllReviewsThunk,
    findReviewByAnimeThunk,
    findReviewByUserThunk
} from "./reviews-thunk";

const reviewsReducer = createSlice({
    name: 'reviews',
    initialState: {
        reviews: []
    },
    extraReducers: {
        [createReviewThunk.fulfilled]: (state, action) => {
            state.reviews.push(action.payload)
        },
        [findReviewByAnimeThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
        },
        [findReviewByUserThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
        },
        [findAllReviewsThunk.fulfilled]: (state, action) => {
            state.reviews = action.payload
        },
        [deleteReviewThunk.fulfilled]: (state, action) => {
            state.reviews = state.reviews.filter(r => {
                return r._id !== action.payload
            })
        },
        [deleteReviewByUserThunk.fulfilled]: (state, action) => {
            state.reviews = state.reviews.filter(r => {
                return r._id !== action.payload
            })
        }
    }
})

export default reviewsReducer.reducer;