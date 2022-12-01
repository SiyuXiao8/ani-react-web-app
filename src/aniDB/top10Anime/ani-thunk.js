import {createAsyncThunk} from "@reduxjs/toolkit";
import {findTop10Anime} from './ani-service';

export const findTop10AnimeThunk = createAsyncThunk(
    'findTop10Anime',  () =>  findTop10Anime()
)