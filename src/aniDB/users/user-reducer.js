import {createSlice} from "@reduxjs/toolkit";
import {loginThunk, logoutThunk, profileThunk, registerThunk} from "./user-thunk";

const userReducer = createSlice({
    name: 'users',
    initialState: {
        loading : true,
        users: [],
        currentUser : null,
        error: null,
    },
    extraReducers: {
        [registerThunk.fulfilled] : (state, action) => {
            state.currentUser = action.payload
            state.loading = false
        },
        [registerThunk.rejected] : (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },
        [loginThunk.fulfilled] : (state, action) => {
            state.currentUser = action.payload
            state.loading = false
        },
        [loginThunk.rejected] : (state, action) => {
            state.error = action.payload
            state.currentUser = null
        },
        [profileThunk.fulfilled] : (state, action) => {
            state.currentUser = action.payload
        },
        [logoutThunk.fulfilled] : (state, action) => {
            state.currentUser = null
        }
    }
})

export default userReducer.reducer;