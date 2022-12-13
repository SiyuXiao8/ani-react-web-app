import axios from "axios";

const SEARCH_URL = 'https://api.jikan.moe/v4/top/anime?limit=12'

export const findTop10Anime = async () => {
    const response = await axios.get(SEARCH_URL)
    return response.data.data; // array of 12 elements
}