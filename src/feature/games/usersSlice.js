import { createSlice } from "@reduxjs/toolkit";
import users from "../../usersData";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: users,
  },

  reducers: {
    addNewUser: (state, action) => {
      state.value = [
        ...state.value,
        {
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
          favorites: [],
          status: false,
          cart: [],
        },
      ];
    },
    setUserInfo: (state, action) => {
      state.value.find((el) => {
        if (el.name === action.payload.name) {
          el.favorites = action.payload.favorites;
          el.cart = action.payload.cart;
        }
      });
    },
  },
});

export const { addNewUser, setUserInfo } = usersSlice.actions;

export default usersSlice.reducer;
