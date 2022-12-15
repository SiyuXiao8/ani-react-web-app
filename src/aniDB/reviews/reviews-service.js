import axios from "axios";

const BASE_URL = 'http://localhost:4000'
// const REVIEW_URL = 'http://localhost:4000/reviews'
// const BASE_URL = process.env.REACT_APP_API_BASE;

const api = axios.create(
    {withCredentials: true}
)

export const createReview = async (review) => {
    const response = await api.post(`${BASE_URL}/reviews`, review)
    return response.data
}

export const findReviewByAnime = async (animeID) => {
    const response = await api.get(`${BASE_URL}/anime/${animeID}/reviews`)
    return response.data
}

export const findReviewByUser = async (userID) => {
    const response = await api.get(`${BASE_URL}/user/${userID}/reviews`)
    return response.data
}

export const findAllReviews = async () => {
    const response = await api.get(`${BASE_URL}/reviews`)
    return response.data
}

export const deleteReview = async (id) => {
    const response = await api.delete(`${BASE_URL}/reviews/${id}`)
    return response.data
}

export const deleteReviewByUser = async (uid) => {
    const response = await api.delete(`${BASE_URL}/user/${uid}/reviews`)
    return response.data
}