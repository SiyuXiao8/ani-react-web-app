import {createSlice} from "@reduxjs/toolkit";
import {findAnimeByIdThunk} from './details-thunk';

const initialState = {
    anime: [],
    loading: true
}

const detailReducer = createSlice({
    name: 'animeDetail',
    initialState,
    extraReducers: {
        [findAnimeByIdThunk.fulfilled]: (state, action) => {
            state.loading = false
            state.anime = action.payload
        }
    }

})

export default detailReducer.reducer;