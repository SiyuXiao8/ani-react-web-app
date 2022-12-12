import {createAsyncThunk} from "@reduxjs/toolkit";
import {createLike, deleteLike, deleteLikeByUser, findLikeByAnime, findLikeByUser} from "./favorite-service";

export const createLikeThunk = createAsyncThunk(
    'createLike',
    async (like) => await createLike(like)
)

export const findLikeByAnimeThunk = createAsyncThunk(
    'findLikeByAnime',
    async (animeID) => await findLikeByAnime(animeID)
)

export const findLikeByUserThunk = createAsyncThunk(
    'findLikeByUser',
    async (userID) => await findLikeByUser(userID)
)

export const deleteLikeThunk = createAsyncThunk(
    'deleteLike',
    async (id) => await deleteLike(id)
)

export const deleteLikeByUserThunk = createAsyncThunk(
    'deleteLikeByUser',
    async (uid) => await deleteLikeByUser(uid)
)