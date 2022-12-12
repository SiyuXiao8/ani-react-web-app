import {createSlice} from "@reduxjs/toolkit";
import {
    deleteUserThunk,
    findAllUsersThunk,
    findUserByIdThunk,
    loginThunk,
    logoutThunk,
    profileThunk,
    registerThunk, updateUserThunk
} from "./user-thunk";

const userReducer = createSlice({
    name: 'users',
    initialState: {
        loading : true,
        users: [],
        currentUser : null,
        error: null,
        publicProfile: null
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
            state.error = null
        },
        [loginThunk.rejected] : (state, action) => {
            state.error = 'Incorrect credential! Try again or register for a new account'
            state.currentUser = null
        },
        [profileThunk.fulfilled] : (state, action) => {
            state.currentUser = action.payload
        },
        [logoutThunk.fulfilled] : (state, action) => {
            state.currentUser = null
        },
        [findUserByIdThunk.fulfilled] : (state, action) => {
            state.publicProfile = action.payload
            state.loading = false
        },
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload
        },
        [deleteUserThunk.fulfilled]: (state, action) => {
            state.users = state.users.filter(u => {
                return u._id !== action.payload
            })
        },
        [updateUserThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
        }
    }
})

export default userReducer.reducer;