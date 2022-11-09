import { createSlice } from "@reduxjs/toolkit";
import gamesData from "../../gamesData";

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    value: gamesData,
  },
  reducers: {},
});

export default gamesSlice.reducer;
