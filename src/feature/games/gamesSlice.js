import { createSlice } from "@reduxjs/toolkit";
import gamesData from "../../gamesData";

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    value: gamesData,
  },
  reducers: {
    setGameStatus: (state, action) => {
      state.value.map((el) => {
        if (el.name === action.payload) {
          el.favorites = !el.favorites;
        }
      });
    },
  },
});

export const { setGameStatus } = gamesSlice.actions;

export default gamesSlice.reducer;
