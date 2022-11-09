import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    value: {
      name: "",
      email: "",
      favorites: [],
      status: false,
      cart: [],
    },
  },

  reducers: {
    login: (state, action) => {
      state.value = {
        name: action.payload.name,
        email: action.payload.email,
        favorites: action.payload.favorites,
        status: true,
        cart: action.payload.cart,
      };
    },
    logout: (state) => {
      state.value = {
        name: "",
        email: "",
        favorites: [],
        status: false,
        cart: [],
      };
    },
    setFavoritesGames: (state, action) => {
      if (!state.value.favorites.includes(action.payload)) {
        state.value.favorites.push(action.payload);
      }
    },
    deleteFavoriteGames: (state, action) => {
      state.value.favorites = state.value.favorites.filter(
        (el) => el !== action.payload
      );
    },
    addGameInCart: (state, action) => {
      if (!state.value.cart.includes(action.payload)) {
        state.value.cart.push(action.payload);
      }
    },
    deleteGameInCart: (state, action) => {
      state.value.cart = state.value.cart.filter(
        (el) => el.name !== action.payload.name
      );
    },
  },
});

export const {
  login,
  logout,
  setFavoritesGames,
  deleteFavoriteGames,
  addGameInCart,
  deleteGameInCart,
} = accountSlice.actions;

export default accountSlice.reducer;
