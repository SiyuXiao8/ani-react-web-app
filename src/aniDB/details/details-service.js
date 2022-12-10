import axios from "axios";

const SEARCH_URL = 'https://api.jikan.moe/v4/anime/'

export const findAnimeById = async (aid) => {
    const response = await axios.get(`${SEARCH_URL}${aid}/full`)
    return response.data.data;
}