import axios from "axios";

const SEARCH_URL = 'https://api.jikan.moe/v4/anime?limit=12&&q='

export const findAnimeBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}`)
    return response.data.data;
}