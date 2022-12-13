import {createSlice} from "@reduxjs/toolkit";
import {findTop10AnimeThunk} from './ani-thunk';

const initialState = {
    animes: [],
    loading: true
}

const animeReducer = createSlice({
    name: 'animeData',
    initialState,
    extraReducers: {
        [findTop10AnimeThunk.fulfilled]: (state, action) => {
                state.loading = false
                state.animes = action.payload
            }
    }
})
export default animeReducer.reducer;