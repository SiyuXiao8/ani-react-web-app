import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAnimeById} from './details-service';

export const findAnimeByIdThunk = createAsyncThunk(
    'findAnimeById', (aid) => findAnimeById(aid)
)