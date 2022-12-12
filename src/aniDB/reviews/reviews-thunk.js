import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    createReview,
    deleteReview,
    deleteReviewByUser,
    findAllReviews,
    findReviewByAnime,
    findReviewByUser
} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) => await createReview(review)
)

export const findReviewByAnimeThunk = createAsyncThunk(
    'findReviewByAnime',
    async (animeID) => await findReviewByAnime(animeID)
)

export const findReviewByUserThunk = createAsyncThunk(
    'findReviewByUser',
    async (userID) => await findReviewByUser(userID)
)

export const findAllReviewsThunk = createAsyncThunk(
    'findAllReviews',
    async () => await findAllReviews()
)

export const deleteReviewThunk = createAsyncThunk(
    'deleteReview',
    async (id) => await deleteReview(id)
)

export const deleteReviewByUserThunk = createAsyncThunk(
    'deleteReviewByUser',
    async (uid) => await deleteReviewByUser(uid)
)