import {createSlice} from "@reduxjs/toolkit";
import {findTop10AnimeThunk} from './ani-thunk';

const initialState = {
    animes: [],
    loading: false
}

const animeReducer = createSlice({
    name: 'animeData',
    initialState,
    extraReducers: {
        [findTop10AnimeThunk.fulfilled]: (state, action) => {
                state.animes = action.payload
                // console.log(state.animes)
            }
    }
})
export default animeReducer.reducer;