import axios from "axios";

const BASE_URL = 'http://localhost:4000/reviews'

const api = axios.create(
    {withCredentials: true}
)

export const createReview = async (review) => {
    const response = await api.post(`${BASE_URL}`, review)
    return response.data
}