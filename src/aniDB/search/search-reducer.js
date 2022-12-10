import {createSlice} from "@reduxjs/toolkit";
import {findAnimeBySearchTermThunk} from "./search-thunk";

const initialState = {
    animeSearch: [],
    loading: true
}

const searchReducer = createSlice({
    name: 'searchData',
    initialState,
    extraReducers: {
        [findAnimeBySearchTermThunk.fulfilled]: (state, action) => {
            state.loading = false
            state.animeSearch = action.payload
        }
    }
})

export default searchReducer.reducer;