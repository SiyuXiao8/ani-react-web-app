import {createAsyncThunk} from "@reduxjs/toolkit";
import {deleteUser, findAllUsers, findUserById, login, logout, profile, register, updateUser} from "./user-service";

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

export const findUserByIdThunk = createAsyncThunk(
    'findUserById',
    async (id) => await findUserById(id)
)

export const findAllUsersThunk = createAsyncThunk(
    'findAllUsers',
    async () => await findAllUsers()
)

export const deleteUserThunk = createAsyncThunk(
    'deleteUser',
    async (id) => await deleteUser(id)
)

export const updateUserThunk = createAsyncThunk(
    'updateUser',
    async (id, updates) => await updateUser(id, updates)
)