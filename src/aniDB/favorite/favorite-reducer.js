import {createSlice} from "@reduxjs/toolkit";
import {
    createLikeThunk,
    deleteLikeByUserThunk,
    deleteLikeThunk,
    findLikeByAnimeThunk,
    findLikeByUserThunk
} from "./favorite-thunk";

const favoriteReducer = createSlice({
    name: 'favorite',
    initialState: {
        favorites: []
    },
    extraReducers: {
        [createLikeThunk.fulfilled]: (state, action) => {
            state.favorites.push(action.payload)
        },
        [findLikeByAnimeThunk.fulfilled]: (state, action) => {
            state.favorites = action.payload
        },
        [findLikeByUserThunk.fulfilled]: (state, action) => {
            state.favorites = action.payload
        },
        [deleteLikeThunk.fulfilled]: (state, action) => {
            state.favorites = state.favorites.filter(f => {
                return f._id !== action.payload
            })
        },
        [deleteLikeByUserThunk.fulfilled]: (state, action) => {
            state.favorites = state.favorites.filter(f => {
                return f._id !== action.payload
            })
        }
    }
})

export default favoriteReducer.reducer;