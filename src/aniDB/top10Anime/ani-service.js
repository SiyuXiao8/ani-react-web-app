import axios from "axios";

const SEARCH_URL = 'https://api.jikan.moe/v4/top/anime?limit=10'

export const findTop10Anime = async () => {
    const response = await axios.get(SEARCH_URL)
    // console.log(response.data.data);
    return response.data.data; // array of 10 elements
}