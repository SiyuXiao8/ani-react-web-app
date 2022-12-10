import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAnimeBySearchTerm} from "./search-service";

export const findAnimeBySearchTermThunk = createAsyncThunk(
    'findAnimeBySearchTerm',
    (term) => findAnimeBySearchTerm(term)
)