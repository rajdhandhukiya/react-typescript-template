import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
// import { createWhitelistFilter } from 'redux-persist-transform-filter';

import rootReducer from "./rootReducer";

// const storeUser = createWhitelistFilter('user', ['rsaKey', 'user']);

const persistConfig = {
  key: "root:fpd",
  storage,
  // transforms: [storeUser]
};

const middlewares: any = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push();
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
