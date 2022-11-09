import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from "../feature/games/gamesSlice";
import accountSlice from "../feature/games/accountSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import usersSlice from "../feature/games/usersSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  games: gamesSlice,
  account: accountSlice,
  users: usersSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);
