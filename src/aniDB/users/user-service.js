import axios from "axios";

const BASE_URL = 'http://localhost:4000'
// const BASE_URL = process.env.REACT_APP_API_BASE;

const api = axios.create(
    {withCredentials: true}
)

export const register = async (user) => {
    const response = await api.post(`${BASE_URL}/register`, user)
    return response.data
}

export const login = async (user) => {
    const response = await api.post(`${BASE_URL}/login`, user)
    return response.data
}

export const profile = async () => {
    const response = await api.post(`${BASE_URL}/profile`)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${BASE_URL}/logout`)
    return response.data
}

export const findUserById = async (id) => {
    const response = await api.get(`${BASE_URL}/users/${id}`)
    return response.data
}

export const findAllUsers = async () => {
    const response = await api.get(`${BASE_URL}/users`)
    return response.data
}

export const deleteUser = async (id) => {
    const response = await api.delete(`${BASE_URL}/users/${id}`)
    return response.data
}

export const updateUser = async (uid, updates) => {
    const response = await api.put(`${BASE_URL}/users/${uid}`, updates)
    return response.data
}