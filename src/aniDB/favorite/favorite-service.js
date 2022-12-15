import axios from "axios";

const BASE_URL = 'http://localhost:4000'
// const BASE_URL = process.env.REACT_APP_API_BASE;

const api = axios.create(
    {withCredentials: true}
)

export const createLike = async (like) => {
    const response = await api.post(`${BASE_URL}/likes`, like)
    return response.data
}

export const findLikeByAnime = async (animeID) => {
    const response = await api.get(`${BASE_URL}/anime/${animeID}/likes`)
    return response.data
}

export const findLikeByUser = async (userID) => {
    const response = await api.get(`${BASE_URL}/user/${userID}/likes`)
    return response.data
}

export const deleteLike = async (id) => {
    const response = await api.delete(`${BASE_URL}/likes/${id}`)
    return response.data
}

export const deleteLikeByUser = async (uid) => {
    const response = await api.delete(`${BASE_URL}/user/${uid}/likes`)
    return response.data
}
