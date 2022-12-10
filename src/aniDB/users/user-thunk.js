import {createAsyncThunk} from "@reduxjs/toolkit";
import {login, logout, profile, register} from "./user-service";

export const registerThunk = createAsyncThunk(
    'register',
    async (user) => await register(user)
)

export const loginThunk = createAsyncThunk(
    'login',
    async (user) => await login(user)
)

export const profileThunk = createAsyncThunk(
    'profile',
    async () => await profile()
)

export const logoutThunk = createAsyncThunk(
    'logout',
    async () => await logout()
)